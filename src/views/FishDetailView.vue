<template>
  <div class="max-w-xl mx-auto px-4 py-8">
    <!-- Back -->
    <router-link to="/" class="text-ocean-600 hover:text-ocean-800 transition-colors inline-flex items-center gap-1 mb-6">
      ← Back to Fishdex
    </router-link>

    <!-- Loading -->
    <div v-if="loading" class="flex justify-center py-20">
      <div class="text-4xl animate-bounce">🎣</div>
    </div>

    <!-- Not found -->
    <div v-else-if="!fish" class="text-center py-20 text-slate-500">
      Fish not found.
    </div>

    <!-- Fish detail -->
    <div v-else class="bg-white rounded-2xl shadow-md overflow-hidden">
      <!-- Photo -->
      <div class="aspect-video bg-ocean-100">
        <img
          v-if="fish.photoUrl"
          :src="fish.photoUrl"
          :alt="fish.name"
          class="w-full h-full object-cover cursor-zoom-in"
          @click="viewerOpen = true"
        />
        <div v-else class="w-full h-full flex items-center justify-center text-8xl">
          🐟
        </div>
      </div>

      <PhotoViewer :src="viewerOpen ? fish.photoUrl : null" :alt="fish.name" @close="viewerOpen = false" />

      <div class="p-6">
        <div class="flex items-start justify-between">
          <div>
            <h1 class="text-2xl font-bold text-slate-800">{{ fish.name }}</h1>
            <p v-if="fish.species" class="text-ocean-600 font-medium">{{ fish.species }}</p>
          </div>
          <div class="flex items-center gap-2">
            <router-link
              :to="`/edit/${route.params.id}`"
              class="text-ocean-400 hover:text-ocean-600 transition-colors p-1"
              title="Edit catch"
            >
              ✏️
            </router-link>
            <button
              @click="handleDelete"
              :disabled="deleting"
              class="text-red-400 hover:text-red-600 transition-colors p-1"
              title="Delete catch"
            >
              🗑️
            </button>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 gap-3 mt-5">
          <div v-if="fish.length" class="bg-ocean-50 rounded-xl p-3">
            <div class="text-xs text-ocean-500 font-medium uppercase tracking-wide">Length</div>
            <div class="text-xl font-bold text-ocean-800 mt-1">{{ fish.length }} cm</div>
          </div>
          <div v-if="fish.weight" class="bg-ocean-50 rounded-xl p-3">
            <div class="text-xs text-ocean-500 font-medium uppercase tracking-wide">Weight</div>
            <div class="text-xl font-bold text-ocean-800 mt-1">{{ fish.weight }} kg</div>
          </div>
        </div>

        <!-- Info -->
        <div class="mt-5 space-y-3">
          <div v-if="fish.location" class="flex items-center gap-2 text-slate-600">
            <span>📍</span>
            <span>{{ fish.location }}</span>
          </div>
          <div v-if="fish.date" class="flex items-center gap-2 text-slate-600">
            <span>📅</span>
            <span>{{ formatDate(fish.date) }}</span>
          </div>
          <div v-if="fish.bait" class="flex items-center gap-2 text-slate-600">
            <span>🪱</span>
            <span>{{ fish.bait }}</span>
          </div>
          <div v-if="fish.technique" class="flex items-center gap-2 text-slate-600">
            <span>🎣</span>
            <span>{{ fish.technique }}</span>
          </div>
          <div v-if="fish.notes" class="mt-4">
            <div class="text-sm font-medium text-slate-500 mb-1">Notes</div>
            <p class="text-slate-700 bg-slate-50 rounded-xl p-3 text-sm">{{ fish.notes }}</p>
          </div>
        </div>

        <!-- Share toggle -->
        <div class="flex items-center justify-between bg-ocean-50 rounded-xl px-4 py-3 mt-6">
          <div>
            <p class="text-sm font-medium text-slate-700">
              {{ fish.public ? '🌍 Shared to feed' : '🔒 Private' }}
            </p>
            <p class="text-xs text-slate-400 mt-0.5">
              {{ fish.public ? 'Visible to everyone' : 'Only visible to you' }}
            </p>
          </div>
          <button
            type="button"
            @click="toggleShare"
            :disabled="toggling"
            :class="fish.public ? 'bg-ocean-600' : 'bg-slate-200'"
            class="relative w-12 h-7 rounded-full transition-colors flex-shrink-0 disabled:opacity-60 overflow-hidden"
          >
            <span
              :class="fish.public ? 'translate-x-6' : 'translate-x-1'"
              class="absolute top-1 left-0 w-5 h-5 bg-white rounded-full shadow transition-transform"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { doc, getDoc, deleteDoc, updateDoc, setDoc } from 'firebase/firestore'
import { ref as storageRef, deleteObject } from 'firebase/storage'
import { useRoute, useRouter } from 'vue-router'
import { db, storage } from '../firebase'
import { user } from '../composables/useAuth'
import PhotoViewer from '../components/PhotoViewer.vue'

const route = useRoute()
const router = useRouter()
const fish = ref(null)
const loading = ref(true)
const deleting = ref(false)
const toggling = ref(false)
const viewerOpen = ref(false)

onMounted(async () => {
  try {
    const docRef = doc(db, `users/${user.value.uid}/fish/${route.params.id}`)
    const snap = await getDoc(docRef)
    if (snap.exists()) {
      fish.value = { id: snap.id, ...snap.data() }
    }
  } finally {
    loading.value = false
  }
})

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-GB', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

async function toggleShare() {
  if (!fish.value || toggling.value) return
  toggling.value = true
  const privateRef = doc(db, `users/${user.value.uid}/fish/${fish.value.id}`)
  const feedRef = doc(db, 'feed', fish.value.id)
  try {
    if (fish.value.public) {
      await updateDoc(privateRef, { public: false })
      try { await deleteDoc(feedRef) } catch {}
      fish.value.public = false
    } else {
      await updateDoc(privateRef, { public: true })
      await setDoc(feedRef, {
        ...fish.value,
        userId: user.value.uid,
        userDisplayName: user.value.displayName,
        userPhotoURL: user.value.photoURL || '',
        likesCount: 0,
        commentsCount: 0,
        public: true,
      })
      fish.value.public = true
    }
  } finally {
    toggling.value = false
  }
}

async function handleDelete() {
  if (!confirm('Delete this catch?')) return
  deleting.value = true
  try {
    if (fish.value.photoUrl) {
      try {
        const fileRef = storageRef(storage, fish.value.photoUrl)
        await deleteObject(fileRef)
      } catch {}
    }
    // Also remove from feed if it was shared
    try { await deleteDoc(doc(db, 'feed', fish.value.id)) } catch {}
    await deleteDoc(doc(db, `users/${user.value.uid}/fish/${fish.value.id}`))
    router.push('/')
  } catch (e) {
    console.error(e)
    deleting.value = false
  }
}
</script>
