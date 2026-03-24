<template>
  <!-- Backdrop -->
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center sm:items-center"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50" @click="$emit('close')" />

      <!-- Panel -->
      <div class="relative bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl max-h-[80vh] flex flex-col shadow-2xl">
        <!-- Header -->
        <div class="flex items-center justify-between px-4 py-3 border-b border-slate-100">
          <h3 class="font-semibold text-slate-800">Comments</h3>
          <button @click="$emit('close')" class="text-slate-400 hover:text-slate-600 text-xl leading-none">×</button>
        </div>

        <!-- Comments list -->
        <div class="flex-1 overflow-y-auto p-4 space-y-4">
          <div v-if="loading" class="text-center text-slate-400 py-8 text-sm">Loading...</div>

          <div v-else-if="comments.length === 0" class="text-center text-slate-400 py-8 text-sm">
            No comments yet. Be the first!
          </div>

          <div
            v-for="c in comments"
            :key="c.id"
            class="flex gap-3"
          >
            <router-link :to="`/profile/${c.userId}`" @click="$emit('close')" class="flex-shrink-0">
              <img
                v-if="c.userPhotoURL"
                :src="c.userPhotoURL"
                class="w-8 h-8 rounded-full"
              />
              <div v-else class="w-8 h-8 rounded-full bg-ocean-200 flex items-center justify-center text-sm">🎣</div>
            </router-link>

            <div class="flex-1 min-w-0">
              <div class="flex items-baseline gap-2">
                <router-link :to="`/profile/${c.userId}`" @click="$emit('close')" class="text-sm font-semibold text-slate-800 hover:text-ocean-600">
                  {{ c.userDisplayName }}
                </router-link>
                <span class="text-xs text-slate-400">{{ timeAgo(c.createdAt) }}</span>
              </div>
              <p class="text-sm text-slate-700 mt-0.5 break-words">{{ c.text }}</p>
            </div>

            <!-- Delete own comment -->
            <button
              v-if="c.userId === currentUser?.uid"
              @click="deleteComment(c)"
              class="text-slate-300 hover:text-red-400 transition-colors text-xs flex-shrink-0"
            >
              ✕
            </button>
          </div>
        </div>

        <!-- Input -->
        <div class="border-t border-slate-100 p-3 flex gap-2">
          <input
            v-model="newComment"
            @keydown.enter.prevent="postComment"
            type="text"
            placeholder="Add a comment…"
            maxlength="300"
            class="flex-1 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400"
          />
          <button
            @click="postComment"
            :disabled="!newComment.trim() || posting"
            class="bg-ocean-600 hover:bg-ocean-700 disabled:bg-ocean-300 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'
import {
  collection, query, orderBy, onSnapshot,
  addDoc, deleteDoc, doc, updateDoc, increment, serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'
import { user as currentUser } from '../composables/useAuth'

const props = defineProps({
  open: Boolean,
  catchId: String,
  catchOwnerId: String,
  catchName: String,
  // override: full Firestore path to the post doc, e.g. 'clubs/abc/posts/xyz'
  postPath: { type: String, default: null },
})
const emit = defineEmits(['close'])

const comments = ref([])
const loading = ref(true)
const newComment = ref('')
const posting = ref(false)
let unsubscribe = null

watch(() => props.open, (val) => {
  if (val && (props.catchId || props.postPath)) startListening()
  else stopListening()
})

const basePath = () => props.postPath || `feed/${props.catchId}`

function startListening() {
  loading.value = true
  const q = query(
    collection(db, `${basePath()}/comments`),
    orderBy('createdAt', 'asc')
  )
  unsubscribe = onSnapshot(q, (snap) => {
    comments.value = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
    loading.value = false
  })
}

function stopListening() {
  if (unsubscribe) { unsubscribe(); unsubscribe = null }
  comments.value = []
  loading.value = true
}

onUnmounted(stopListening)

async function postComment() {
  const text = newComment.value.trim()
  if (!text || posting.value) return
  posting.value = true
  try {
    const path = basePath()
    await addDoc(collection(db, `${path}/comments`), {
      userId: currentUser.value.uid,
      userDisplayName: currentUser.value.displayName,
      userPhotoURL: currentUser.value.photoURL || '',
      text,
      createdAt: serverTimestamp(),
    })
    await updateDoc(doc(db, path), { commentsCount: increment(1) })
    newComment.value = ''
    // Notify catch owner only for public feed (no notification for club posts)
    if (!props.postPath && props.catchOwnerId && props.catchOwnerId !== currentUser.value.uid) {
      addDoc(collection(db, `users/${props.catchOwnerId}/notifications`), {
        type: 'comment',
        fromUserId: currentUser.value.uid,
        fromDisplayName: currentUser.value.displayName,
        fromPhotoURL: currentUser.value.photoURL || '',
        catchId: props.catchId,
        catchName: props.catchName || '',
        text: text.slice(0, 100),
        read: false,
        createdAt: serverTimestamp(),
      })
    }
  } finally {
    posting.value = false
  }
}

async function deleteComment(comment) {
  const path = basePath()
  await deleteDoc(doc(db, `${path}/comments/${comment.id}`))
  await updateDoc(doc(db, path), { commentsCount: increment(-1) })
}

function timeAgo(ts) {
  if (!ts) return ''
  const date = ts.toDate ? ts.toDate() : new Date(ts)
  const secs = Math.floor((Date.now() - date) / 1000)
  if (secs < 60) return 'just now'
  if (secs < 3600) return `${Math.floor(secs / 60)}m ago`
  if (secs < 86400) return `${Math.floor(secs / 3600)}h ago`
  return `${Math.floor(secs / 86400)}d ago`
}
</script>
