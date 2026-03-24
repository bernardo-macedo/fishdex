<template>
  <div class="max-w-xl mx-auto px-4 py-8">
    <div class="mb-6 flex items-start justify-between gap-3">
      <div>
        <h1 class="text-3xl font-bold text-slate-800">Feed</h1>
        <p class="text-slate-500 mt-1">Catches from the community</p>
      </div>
      <!-- Create club button -->
      <button
        @click="showCreateClub = true"
        class="text-sm bg-ocean-600 hover:bg-ocean-700 text-white px-3 py-1.5 rounded-xl transition-colors flex-shrink-0 mt-1"
      >
        + New club
      </button>
    </div>

    <!-- Tabs -->
    <div class="flex gap-1 bg-slate-100 rounded-xl p-1 mb-6">
      <button
        @click="activeTab = 'public'"
        :class="activeTab === 'public' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'"
        class="flex-1 py-2 text-sm font-medium rounded-lg transition-all"
      >
        Public Feed
      </button>
      <button
        @click="activeTab = 'clubs'"
        :class="activeTab === 'clubs' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'"
        class="flex-1 py-2 text-sm font-medium rounded-lg transition-all"
      >
        My Clubs
        <span v-if="myClubs.length > 0" class="ml-1 text-xs bg-ocean-100 text-ocean-700 px-1.5 py-0.5 rounded-full">{{ myClubs.length }}</span>
      </button>
    </div>

    <!-- Public Feed -->
    <div v-if="activeTab === 'public'">
      <div v-if="loading" class="flex justify-center py-20">
        <div class="text-4xl animate-bounce">🎣</div>
      </div>
      <div v-else-if="catches.length === 0" class="text-center py-20">
        <div class="text-6xl mb-4">🌊</div>
        <p class="text-slate-500 mb-2">Nothing in the feed yet.</p>
        <p class="text-slate-400 text-sm">Log a catch and toggle "Share to feed" to be the first!</p>
      </div>
      <div v-else class="space-y-6">
        <FeedCard
          v-for="c in catches"
          :key="c.id"
          :catch_="c"
        />
      </div>
    </div>

    <!-- My Clubs -->
    <div v-else-if="activeTab === 'clubs'">
      <div v-if="clubsLoading" class="flex justify-center py-20">
        <div class="text-4xl animate-bounce">🎣</div>
      </div>
      <div v-else-if="myClubs.length === 0" class="text-center py-20">
        <div class="text-6xl mb-4">🎏</div>
        <p class="text-slate-500 mb-2">You're not in any clubs yet.</p>
        <p class="text-slate-400 text-sm">Create one or use an invite link to join.</p>
      </div>
      <div v-else class="space-y-4">
        <router-link
          v-for="club in myClubs"
          :key="club.id"
          :to="`/clubs/${club.id}`"
          class="block bg-white rounded-2xl shadow-sm border border-slate-100 p-5 hover:border-ocean-200 transition-colors"
        >
          <div class="flex items-center justify-between gap-2">
            <div>
              <h3 class="font-bold text-slate-800">{{ club.name }}</h3>
              <p v-if="club.description" class="text-sm text-slate-500 mt-0.5 line-clamp-1">{{ club.description }}</p>
            </div>
            <div class="text-right flex-shrink-0">
              <div class="text-xs text-slate-400">{{ club.memberIds?.length || 0 }} members</div>
              <div v-if="club.adminIds?.includes(user?.uid)" class="text-xs text-ocean-600 font-medium mt-0.5">Admin</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>

  <!-- Create Club modal -->
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="showCreateClub" class="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
        <div class="absolute inset-0 bg-black/50" @click="showCreateClub = false" />
        <div class="relative bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl p-6 shadow-2xl">
          <h2 class="text-lg font-bold text-slate-800 mb-5">Create a club</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Club name <span class="text-red-400">*</span></label>
              <input
                v-model="newClub.name"
                type="text"
                maxlength="60"
                placeholder="e.g. River Tagus Anglers"
                class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-400"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Description</label>
              <textarea
                v-model="newClub.description"
                rows="2"
                maxlength="200"
                placeholder="What's this club about?"
                class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 resize-none"
              />
            </div>
          </div>
          <p v-if="createError" class="text-sm text-red-500 mt-3">{{ createError }}</p>
          <div class="flex gap-3 mt-4">
            <button
              @click="showCreateClub = false; createError = ''"
              class="flex-1 border border-slate-200 text-slate-600 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              @click="createClub"
              :disabled="!newClub.name.trim() || creating"
              class="flex-1 bg-ocean-600 hover:bg-ocean-700 disabled:bg-ocean-300 text-white py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              {{ creating ? 'Creating…' : 'Create club' }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  collection, query, orderBy, where, onSnapshot,
  addDoc, setDoc, doc, serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'
import { user } from '../composables/useAuth'
import FeedCard from '../components/FeedCard.vue'

const router = useRouter()

const catches = ref([])
const loading = ref(true)
const myClubs = ref([])
const clubsLoading = ref(true)
const activeTab = ref('public')
const showCreateClub = ref(false)
const creating = ref(false)
const newClub = ref({ name: '', description: '' })
const createError = ref('')

let feedUnsub = null
let clubsUnsub = null

onMounted(() => {
  // Public feed
  const q = query(collection(db, 'feed'), orderBy('createdAt', 'desc'))
  feedUnsub = onSnapshot(q, (snap) => {
    catches.value = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
    loading.value = false
  })

  // User's clubs
  if (user.value) {
    const cq = query(
      collection(db, 'clubs'),
      where('memberIds', 'array-contains', user.value.uid)
    )
    clubsUnsub = onSnapshot(cq, (snap) => {
      myClubs.value = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
      clubsLoading.value = false
    }, () => { clubsLoading.value = false })
  }
})

onUnmounted(() => {
  if (feedUnsub) feedUnsub()
  if (clubsUnsub) clubsUnsub()
})

function generateCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase()
}

async function createClub() {
  const name = newClub.value.name.trim()
  if (!name || creating.value) return
  creating.value = true
  createError.value = ''
  try {
    const uid = user.value.uid
    const clubRef = await addDoc(collection(db, 'clubs'), {
      name,
      description: newClub.value.description.trim(),
      adminIds: [uid],
      memberIds: [uid],
      inviteCode: generateCode(),
      createdByUid: uid,
      createdAt: serverTimestamp(),
    })
    // Add creator to members subcollection
    await setDoc(doc(db, `clubs/${clubRef.id}/members/${uid}`), {
      displayName: user.value.displayName,
      photoURL: user.value.photoURL || '',
      joinedAt: serverTimestamp(),
    })
    showCreateClub.value = false
    newClub.value = { name: '', description: '' }
    router.push(`/clubs/${clubRef.id}`)
  } catch (e) {
    console.error(e)
    createError.value = 'Failed to create club. Check your connection and try again.'
  } finally {
    creating.value = false
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
