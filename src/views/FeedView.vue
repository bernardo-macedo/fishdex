<template>
  <div class="max-w-xl mx-auto px-4 py-8">
    <div class="mb-6 flex items-start justify-between gap-3">
      <div>
        <h1 class="text-3xl font-bold text-slate-800">Feed</h1>
        <p class="text-slate-500 mt-1">Catches from the community</p>
      </div>
      <!-- Context-aware create button -->
      <button
        v-if="activeTab === 'clubs'"
        @click="showCreateClub = true"
        class="text-sm bg-ocean-600 hover:bg-ocean-700 text-white px-3 py-1.5 rounded-xl transition-colors flex-shrink-0 mt-1"
      >
        + New club
      </button>
      <button
        v-else-if="activeTab === 'competitions'"
        @click="showCreateComp = true"
        class="text-sm bg-ocean-600 hover:bg-ocean-700 text-white px-3 py-1.5 rounded-xl transition-colors flex-shrink-0 mt-1"
      >
        + New competition
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
        Clubs
        <span v-if="myClubs.length > 0" class="ml-1 text-xs bg-ocean-100 text-ocean-700 px-1.5 py-0.5 rounded-full">{{ myClubs.length }}</span>
      </button>
      <button
        @click="activeTab = 'competitions'"
        :class="activeTab === 'competitions' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'"
        class="flex-1 py-2 text-sm font-medium rounded-lg transition-all"
      >
        Competitions
        <span v-if="myComps.length > 0" class="ml-1 text-xs bg-ocean-100 text-ocean-700 px-1.5 py-0.5 rounded-full">{{ myComps.length }}</span>
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

    <!-- Competitions -->
    <div v-else-if="activeTab === 'competitions'">
      <div v-if="compsLoading" class="flex justify-center py-20">
        <div class="text-4xl animate-bounce">🎣</div>
      </div>
      <template v-else>
        <!-- My competitions -->
        <div v-if="myComps.length === 0 && discoverComps.length === 0" class="text-center py-20">
          <div class="text-6xl mb-4">🏆</div>
          <p class="text-slate-500 mb-2">No competitions yet.</p>
          <p class="text-slate-400 text-sm">Create one or join a public competition.</p>
        </div>
        <template v-else>
          <div v-if="myComps.length > 0" class="space-y-4 mb-8">
            <CompetitionCard
              v-for="comp in myComps"
              :key="comp.id"
              :competition="comp"
              :currentUid="user?.uid"
            />
          </div>

          <!-- Discover public competitions -->
          <div v-if="discoverComps.length > 0">
            <h2 class="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Discover</h2>
            <div class="space-y-4">
              <div
                v-for="comp in discoverComps"
                :key="comp.id"
                class="bg-white rounded-2xl shadow-sm border border-slate-100 p-5"
              >
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <div class="flex items-center gap-2 mb-1">
                      <h3 class="font-bold text-slate-800 truncate">{{ comp.title }}</h3>
                      <span :class="getStatus(comp).color" class="text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap">
                        {{ getStatus(comp).label }}
                      </span>
                    </div>
                    <p v-if="comp.description" class="text-sm text-slate-500 line-clamp-1">{{ comp.description }}</p>
                    <div class="text-xs text-slate-400 mt-2">{{ comp.memberIds?.length || 0 }} participants</div>
                  </div>
                  <button
                    @click="joinPublicComp(comp)"
                    :disabled="joiningCompId === comp.id"
                    class="text-sm bg-ocean-600 hover:bg-ocean-700 disabled:bg-ocean-300 text-white px-3 py-1.5 rounded-xl transition-colors flex-shrink-0"
                  >
                    {{ joiningCompId === comp.id ? 'Joining…' : 'Join' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </template>
      </template>
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

  <!-- Create Competition modal -->
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="showCreateComp" class="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
        <div class="absolute inset-0 bg-black/50" @click="showCreateComp = false" />
        <div class="relative bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
          <h2 class="text-lg font-bold text-slate-800 mb-5">Create a competition</h2>
          <div class="space-y-4">
            <!-- Title -->
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Title <span class="text-red-400">*</span></label>
              <input
                v-model="newComp.title"
                type="text"
                maxlength="80"
                placeholder="e.g. Summer Pike Challenge"
                class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-400"
              />
            </div>

            <!-- Description -->
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Description</label>
              <textarea
                v-model="newComp.description"
                rows="2"
                maxlength="300"
                placeholder="What is this competition about?"
                class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 resize-none"
              />
            </div>

            <!-- Rules -->
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Rules</label>
              <textarea
                v-model="newComp.rules"
                rows="3"
                maxlength="500"
                placeholder="Custom rules for participants…"
                class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 resize-none"
              />
            </div>

            <!-- Date range -->
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">Start date <span class="text-red-400">*</span></label>
                <input
                  v-model="newComp.startDate"
                  type="date"
                  class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-ocean-400"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">End date <span class="text-red-400">*</span></label>
                <input
                  v-model="newComp.endDate"
                  type="date"
                  class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-ocean-400"
                />
              </div>
            </div>

            <!-- Species filter -->
            <SpeciesPicker v-model="newComp.allowedSpecies" label="Allowed species (leave empty for all)" />

            <!-- Required fields -->
            <div>
              <p class="text-sm font-medium text-slate-700 mb-2">Required catch fields</p>
              <div class="space-y-2">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" v-model="newComp.requirePhoto" class="rounded border-slate-300 text-ocean-600 focus:ring-ocean-400" />
                  <span class="text-sm text-slate-700">Photo required</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" v-model="newComp.requireLength" class="rounded border-slate-300 text-ocean-600 focus:ring-ocean-400" />
                  <span class="text-sm text-slate-700">Length required</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" v-model="newComp.requireWeight" class="rounded border-slate-300 text-ocean-600 focus:ring-ocean-400" />
                  <span class="text-sm text-slate-700">Weight required</span>
                </label>
              </div>
            </div>

            <!-- Rank by -->
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Rank by</label>
              <select
                v-model="newComp.rankBy"
                class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-ocean-400 appearance-none"
              >
                <option value="weight">Heaviest catch (weight)</option>
                <option value="length">Longest catch (length)</option>
                <option value="count">Most catches (count)</option>
              </select>
            </div>

            <!-- Visibility -->
            <div>
              <p class="text-sm font-medium text-slate-700 mb-2">Visibility</p>
              <div class="flex gap-3">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" v-model="newComp.public" :value="true" class="text-ocean-600 focus:ring-ocean-400" />
                  <span class="text-sm text-slate-700">Public (anyone can join)</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" v-model="newComp.public" :value="false" class="text-ocean-600 focus:ring-ocean-400" />
                  <span class="text-sm text-slate-700">Invite only</span>
                </label>
              </div>
            </div>
          </div>

          <p v-if="compCreateError" class="text-sm text-red-500 mt-3">{{ compCreateError }}</p>
          <div class="flex gap-3 mt-5">
            <button
              @click="showCreateComp = false; compCreateError = ''"
              class="flex-1 border border-slate-200 text-slate-600 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              @click="createCompetition"
              :disabled="!canCreateComp || creatingComp"
              class="flex-1 bg-ocean-600 hover:bg-ocean-700 disabled:bg-ocean-300 text-white py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              {{ creatingComp ? 'Creating…' : 'Create competition' }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  collection, query, orderBy, where, onSnapshot,
  addDoc, setDoc, doc, updateDoc, arrayUnion, serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'
import { user } from '../composables/useAuth'
import FeedCard from '../components/FeedCard.vue'
import CompetitionCard from '../components/CompetitionCard.vue'
import SpeciesPicker from '../components/SpeciesPicker.vue'
import { getCompetitionStatus } from '../utils/competitionStatus'

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

// Competitions
const myComps = ref([])
const allPublicComps = ref([])
const compsLoading = ref(true)
const showCreateComp = ref(false)
const creatingComp = ref(false)
const compCreateError = ref('')
const joiningCompId = ref(null)

const newComp = ref({
  title: '',
  description: '',
  rules: '',
  startDate: '',
  endDate: '',
  allowedSpecies: [],
  requirePhoto: false,
  requireLength: false,
  requireWeight: false,
  rankBy: 'weight',
  public: true,
})

const canCreateComp = computed(() =>
  newComp.value.title.trim() && newComp.value.startDate && newComp.value.endDate &&
  newComp.value.endDate >= newComp.value.startDate
)

const discoverComps = computed(() => {
  const uid = user.value?.uid
  return allPublicComps.value.filter(c => !c.memberIds?.includes(uid))
})

let feedUnsub = null
let clubsUnsub = null
let myCompsUnsub = null
let publicCompsUnsub = null

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

    // User's competitions
    const compQ = query(
      collection(db, 'competitions'),
      where('memberIds', 'array-contains', user.value.uid)
    )
    myCompsUnsub = onSnapshot(compQ, (snap) => {
      myComps.value = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
      compsLoading.value = false
    }, () => { compsLoading.value = false })

    // Public competitions (for discover)
    const pubQ = query(
      collection(db, 'competitions'),
      where('public', '==', true)
    )
    publicCompsUnsub = onSnapshot(pubQ, (snap) => {
      allPublicComps.value = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
    })
  }
})

onUnmounted(() => {
  if (feedUnsub) feedUnsub()
  if (clubsUnsub) clubsUnsub()
  if (myCompsUnsub) myCompsUnsub()
  if (publicCompsUnsub) publicCompsUnsub()
})

function generateCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase()
}

function getStatus(comp) {
  return getCompetitionStatus(comp.startDate, comp.endDate)
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

async function createCompetition() {
  if (!canCreateComp.value || creatingComp.value) return
  creatingComp.value = true
  compCreateError.value = ''
  try {
    const uid = user.value.uid
    const compData = {
      title: newComp.value.title.trim(),
      description: newComp.value.description.trim(),
      rules: newComp.value.rules.trim(),
      startDate: newComp.value.startDate,
      endDate: newComp.value.endDate,
      allowedSpecies: newComp.value.allowedSpecies,
      requirePhoto: newComp.value.requirePhoto,
      requireLength: newComp.value.requireLength,
      requireWeight: newComp.value.requireWeight,
      rankBy: newComp.value.rankBy,
      public: newComp.value.public,
      inviteCode: newComp.value.public ? null : generateCode(),
      memberIds: [uid],
      adminIds: [uid],
      createdByUid: uid,
      createdAt: serverTimestamp(),
    }
    const compRef = await addDoc(collection(db, 'competitions'), compData)
    await setDoc(doc(db, `competitions/${compRef.id}/participants/${uid}`), {
      displayName: user.value.displayName,
      photoURL: user.value.photoURL || '',
      joinedAt: serverTimestamp(),
    })
    showCreateComp.value = false
    newComp.value = {
      title: '', description: '', rules: '', startDate: '', endDate: '',
      allowedSpecies: [], requirePhoto: false, requireLength: false, requireWeight: false,
      rankBy: 'weight', public: true,
    }
    router.push(`/competitions/${compRef.id}`)
  } catch (e) {
    console.error(e)
    compCreateError.value = 'Failed to create competition. Try again.'
  } finally {
    creatingComp.value = false
  }
}

async function joinPublicComp(comp) {
  if (joiningCompId.value) return
  joiningCompId.value = comp.id
  try {
    const uid = user.value.uid
    await updateDoc(doc(db, 'competitions', comp.id), {
      memberIds: arrayUnion(uid),
    })
    await setDoc(doc(db, `competitions/${comp.id}/participants/${uid}`), {
      displayName: user.value.displayName,
      photoURL: user.value.photoURL || '',
      joinedAt: serverTimestamp(),
    })
    router.push(`/competitions/${comp.id}`)
  } catch (e) {
    console.error(e)
  } finally {
    joiningCompId.value = null
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
