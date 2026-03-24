<template>
  <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
    <!-- User header -->
    <div class="flex items-center gap-3 p-4 pb-3">
      <router-link :to="`/profile/${post.userId}`" class="flex-shrink-0">
        <img
          v-if="post.userPhotoURL"
          :src="post.userPhotoURL"
          class="w-10 h-10 rounded-full border-2 border-ocean-100"
        />
        <div v-else class="w-10 h-10 rounded-full bg-ocean-100 flex items-center justify-center">🎣</div>
      </router-link>
      <div class="flex-1 min-w-0">
        <router-link :to="`/profile/${post.userId}`" class="font-semibold text-slate-800 hover:text-ocean-600 transition-colors text-sm">
          {{ post.userDisplayName }}
        </router-link>
        <div class="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
          <button
            v-if="post.coords?.lat"
            @click="showMap = true"
            class="text-ocean-500 hover:underline"
          >📍 {{ post.location || 'View on map' }}</button>
          <span v-else-if="post.location">📍 {{ post.location }}</span>
          <span v-if="(post.location || post.coords) && (post.date || post.createdAt)"> · </span>
          <span v-if="post.date">{{ formatDate(post.date) }}</span>
          <span v-else-if="post.createdAt">{{ formatTimestamp(post.createdAt) }}</span>
          <span v-if="post.type === 'message'" class="ml-1 bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide">club message</span>
        </div>
      </div>
    </div>

    <!-- Text message body -->
    <div v-if="post.type === 'message'" class="px-4 pb-3">
      <p class="text-slate-700 text-sm whitespace-pre-line">{{ post.text }}</p>
    </div>

    <!-- Catch: photo -->
    <template v-else>
      <div v-if="post.photoUrl" class="aspect-video bg-ocean-50">
        <img
          :src="post.photoUrl"
          :alt="post.name"
          class="w-full h-full object-cover cursor-zoom-in"
          @click="viewerOpen = true"
        />
      </div>
      <PhotoViewer :src="viewerOpen ? post.photoUrl : null" :alt="post.name" @close="viewerOpen = false" />

      <!-- Fish info -->
      <div class="px-4 pt-3 pb-2">
        <div class="flex items-start justify-between gap-2">
          <div>
            <h3 class="font-bold text-slate-800">{{ post.name }}</h3>
            <p v-if="post.species" class="text-ocean-600 text-sm italic">{{ post.species }}</p>
          </div>
          <router-link
            v-if="post.catalogId"
            :to="`/catalog/${post.catalogId}`"
            class="text-xs bg-ocean-50 text-ocean-600 px-2 py-1 rounded-full hover:bg-ocean-100 transition-colors flex-shrink-0"
          >
            View in catalog →
          </router-link>
        </div>
        <div class="flex flex-wrap gap-2 mt-2">
          <span v-if="post.length" class="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">📏 {{ post.length }} cm</span>
          <span v-if="post.weight" class="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">⚖️ {{ post.weight }} kg</span>
          <span v-if="post.bait" class="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">🪱 {{ post.bait }}</span>
          <span v-if="post.technique" class="text-xs bg-ocean-50 text-ocean-700 px-2 py-1 rounded-full">🎣 {{ post.technique }}</span>
        </div>
        <p v-if="post.notes" class="text-sm text-slate-500 mt-2 line-clamp-2">{{ post.notes }}</p>
      </div>
    </template>

    <!-- Actions -->
    <div class="flex items-center gap-4 px-4 py-3 border-t border-slate-50">
      <button
        @click="toggleLike"
        :disabled="likeLoading"
        class="flex items-center gap-1.5 text-sm transition-colors"
        :class="liked ? 'text-red-500' : 'text-slate-400 hover:text-red-400'"
      >
        <span class="text-lg leading-none">{{ liked ? '❤️' : '🤍' }}</span>
        <span class="font-medium">{{ likesCount }}</span>
      </button>

      <button
        @click="showComments = true"
        class="flex items-center gap-1.5 text-sm text-slate-400 hover:text-ocean-500 transition-colors"
      >
        <span class="text-lg leading-none">💬</span>
        <span class="font-medium">{{ post.commentsCount || 0 }}</span>
      </button>
    </div>
  </div>

  <CommentsPanel
    :open="showComments"
    :postPath="`clubs/${clubId}/posts/${post.id}`"
    :catchName="post.name || post.text"
    @close="showComments = false"
  />

  <MapModal
    v-if="post.coords?.lat"
    :show="showMap"
    :coords="post.coords"
    :title="post.name || ''"
    :subtitle="post.location"
    @close="showMap = false"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { doc, getDoc, setDoc, deleteDoc, updateDoc, increment, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { user } from '../composables/useAuth'
import CommentsPanel from './CommentsPanel.vue'
import PhotoViewer from './PhotoViewer.vue'
import MapModal from './MapModal.vue'

const props = defineProps({
  post: { type: Object, required: true },
  clubId: { type: String, required: true },
})

const liked = ref(false)
const likesCount = ref(props.post.likesCount || 0)
const likeLoading = ref(false)
const showComments = ref(false)
const viewerOpen = ref(false)
const showMap = ref(false)

onMounted(async () => {
  if (!user.value) return
  const likeRef = doc(db, `clubs/${props.clubId}/posts/${props.post.id}/likes/${user.value.uid}`)
  const snap = await getDoc(likeRef)
  liked.value = snap.exists()
})

async function toggleLike() {
  if (!user.value || likeLoading.value) return
  likeLoading.value = true
  const likeRef = doc(db, `clubs/${props.clubId}/posts/${props.post.id}/likes/${user.value.uid}`)
  const postRef = doc(db, `clubs/${props.clubId}/posts`, props.post.id)
  try {
    if (liked.value) {
      await deleteDoc(likeRef)
      await updateDoc(postRef, { likesCount: increment(-1) })
      liked.value = false
      likesCount.value--
    } else {
      await setDoc(likeRef, {
        userId: user.value.uid,
        userDisplayName: user.value.displayName,
        userPhotoURL: user.value.photoURL || '',
        createdAt: serverTimestamp(),
      })
      await updateDoc(postRef, { likesCount: increment(1) })
      liked.value = true
      likesCount.value++
    }
  } finally {
    likeLoading.value = false
  }
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

function formatTimestamp(ts) {
  if (!ts) return ''
  const date = ts.toDate ? ts.toDate() : new Date(ts)
  const secs = Math.floor((Date.now() - date) / 1000)
  if (secs < 60) return 'just now'
  if (secs < 3600) return `${Math.floor(secs / 60)}m ago`
  if (secs < 86400) return `${Math.floor(secs / 3600)}h ago`
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}
</script>
