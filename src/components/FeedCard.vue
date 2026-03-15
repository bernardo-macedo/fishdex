<template>
  <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
    <!-- User header -->
    <div class="flex items-center gap-3 p-4 pb-3">
      <router-link :to="`/profile/${catch_.userId}`" class="flex-shrink-0">
        <img
          v-if="catch_.userPhotoURL"
          :src="catch_.userPhotoURL"
          class="w-10 h-10 rounded-full border-2 border-ocean-100"
        />
        <div v-else class="w-10 h-10 rounded-full bg-ocean-100 flex items-center justify-center">🎣</div>
      </router-link>
      <div class="flex-1 min-w-0">
        <router-link :to="`/profile/${catch_.userId}`" class="font-semibold text-slate-800 hover:text-ocean-600 transition-colors text-sm">
          {{ catch_.userDisplayName }}
        </router-link>
        <div class="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
          <span v-if="catch_.location">📍 {{ catch_.location }}</span>
          <span v-if="catch_.location && catch_.date"> · </span>
          <span v-if="catch_.date">{{ formatDate(catch_.date) }}</span>
        </div>
      </div>
    </div>

    <!-- Photo -->
    <div v-if="catch_.photoUrl" class="aspect-video bg-ocean-50">
      <img
        :src="catch_.photoUrl"
        :alt="catch_.name"
        class="w-full h-full object-cover cursor-zoom-in"
        @click="viewerOpen = true"
      />
    </div>

    <PhotoViewer :src="viewerOpen ? catch_.photoUrl : null" :alt="catch_.name" @close="viewerOpen = false" />

    <!-- Fish info -->
    <div class="px-4 pt-3 pb-2">
      <div class="flex items-start justify-between gap-2">
        <div>
          <h3 class="font-bold text-slate-800">{{ catch_.name }}</h3>
          <p v-if="catch_.species" class="text-ocean-600 text-sm italic">{{ catch_.species }}</p>
        </div>
        <router-link
          v-if="catch_.catalogId"
          :to="`/catalog/${catch_.catalogId}`"
          class="text-xs bg-ocean-50 text-ocean-600 px-2 py-1 rounded-full hover:bg-ocean-100 transition-colors flex-shrink-0"
        >
          View in catalog →
        </router-link>
      </div>

      <div class="flex flex-wrap gap-2 mt-2">
        <span v-if="catch_.length" class="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">📏 {{ catch_.length }} cm</span>
        <span v-if="catch_.weight" class="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">⚖️ {{ catch_.weight }} kg</span>
        <span v-if="catch_.bait" class="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">🪱 {{ catch_.bait }}</span>
        <span v-if="catch_.technique" class="text-xs bg-ocean-50 text-ocean-700 px-2 py-1 rounded-full">🎣 {{ catch_.technique }}</span>
      </div>

      <p v-if="catch_.notes" class="text-sm text-slate-500 mt-2 line-clamp-2">{{ catch_.notes }}</p>
    </div>

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
        <span class="font-medium">{{ catch_.commentsCount || 0 }}</span>
      </button>
    </div>
  </div>

  <CommentsPanel
    :open="showComments"
    :catchId="catch_.id"
    :catchOwnerId="catch_.userId"
    :catchName="catch_.name"
    @close="showComments = false"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { doc, getDoc, setDoc, deleteDoc, updateDoc, increment, serverTimestamp, addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase'
import { user } from '../composables/useAuth'
import CommentsPanel from './CommentsPanel.vue'
import PhotoViewer from './PhotoViewer.vue'

const props = defineProps({
  catch_: { type: Object, required: true },
})

const liked = ref(false)
const likesCount = ref(props.catch_.likesCount || 0)
const likeLoading = ref(false)
const showComments = ref(false)
const viewerOpen = ref(false)

onMounted(async () => {
  if (!user.value) return
  const likeRef = doc(db, `feed/${props.catch_.id}/likes/${user.value.uid}`)
  const snap = await getDoc(likeRef)
  liked.value = snap.exists()
})

async function toggleLike() {
  if (!user.value || likeLoading.value) return
  likeLoading.value = true
  const likeRef = doc(db, `feed/${props.catch_.id}/likes/${user.value.uid}`)
  const feedRef = doc(db, 'feed', props.catch_.id)
  try {
    if (liked.value) {
      await deleteDoc(likeRef)
      await updateDoc(feedRef, { likesCount: increment(-1) })
      liked.value = false
      likesCount.value--
    } else {
      await setDoc(likeRef, {
        userId: user.value.uid,
        userDisplayName: user.value.displayName,
        userPhotoURL: user.value.photoURL || '',
        createdAt: serverTimestamp(),
      })
      await updateDoc(feedRef, { likesCount: increment(1) })
      liked.value = true
      likesCount.value++
      // Notify catch owner (skip own catches)
      if (props.catch_.userId && props.catch_.userId !== user.value.uid) {
        addDoc(collection(db, `users/${props.catch_.userId}/notifications`), {
          type: 'like',
          fromUserId: user.value.uid,
          fromDisplayName: user.value.displayName,
          fromPhotoURL: user.value.photoURL || '',
          catchId: props.catch_.id,
          catchName: props.catch_.name,
          read: false,
          createdAt: serverTimestamp(),
        })
      }
    }
  } finally {
    likeLoading.value = false
  }
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}
</script>
