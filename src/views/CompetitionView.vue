<template>
  <div class="max-w-xl mx-auto px-4 py-8">
    <!-- Loading -->
    <div v-if="loading" class="flex justify-center py-20">
      <div class="text-4xl animate-bounce">🎣</div>
    </div>

    <!-- Not found -->
    <div v-else-if="!comp" class="text-center py-20">
      <div class="text-5xl mb-4">🤔</div>
      <p class="text-slate-500">Competition not found.</p>
    </div>

    <!-- Not a member -->
    <div v-else-if="!isMember" class="text-center py-20">
      <div class="text-5xl mb-4">🔒</div>
      <p class="text-slate-700 font-semibold mb-2">Participants only</p>
      <p class="text-slate-400 text-sm">You're not a participant in this competition.</p>
    </div>

    <template v-else>
      <!-- Header -->
      <div class="flex items-start justify-between mb-6 gap-3">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <router-link to="/feed" class="text-ocean-600 hover:text-ocean-800 text-sm">← Feed</router-link>
          </div>
          <div class="flex items-center gap-2 mb-1">
            <h1 class="text-2xl font-bold text-slate-800">{{ comp.title }}</h1>
            <span :class="statusInfo.color" class="text-xs font-medium px-2 py-0.5 rounded-full">{{ statusInfo.label }}</span>
          </div>
          <p v-if="comp.description" class="text-slate-500 text-sm mt-0.5">{{ comp.description }}</p>
          <p class="text-xs text-slate-400 mt-1">
            {{ formatDate(comp.startDate) }} – {{ formatDate(comp.endDate) }} · {{ comp.memberIds?.length || 0 }} participants
          </p>
        </div>
        <div class="flex gap-2 flex-shrink-0">
          <router-link
            v-if="statusInfo.status === 'active'"
            :to="`/competitions/${compId}/submit`"
            class="text-sm bg-ocean-600 hover:bg-ocean-700 text-white px-3 py-1.5 rounded-xl transition-colors"
          >
            + Submit catch
          </router-link>
          <router-link
            v-if="isAdmin"
            :to="`/competitions/${compId}/admin`"
            class="text-sm bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1.5 rounded-xl transition-colors"
          >
            <span v-if="pendingCount > 0" class="inline-flex items-center">
              ⚙️ Manage <span class="ml-1.5 bg-amber-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{{ pendingCount }}</span>
            </span>
            <span v-else>⚙️ Manage</span>
          </router-link>
        </div>
      </div>

      <!-- Tabs -->
      <div class="flex gap-1 bg-slate-100 rounded-xl p-1 mb-6">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          @click="activeTab = tab.key"
          :class="activeTab === tab.key ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'"
          class="flex-1 py-2 text-sm font-medium rounded-lg transition-all"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Leaderboard tab -->
      <div v-if="activeTab === 'leaderboard'">
        <LeaderboardTable :competitionId="compId" :rankBy="comp.rankBy" />
      </div>

      <!-- Entries tab -->
      <div v-else-if="activeTab === 'entries'">
        <div v-if="entriesLoading" class="flex justify-center py-16">
          <div class="text-3xl animate-bounce">🎣</div>
        </div>
        <div v-else-if="allEntries.length === 0" class="text-center py-12">
          <div class="text-5xl mb-3">📋</div>
          <p class="text-slate-700 font-semibold mb-1">No submissions yet</p>
          <p class="text-slate-400 text-sm">Catches submitted by participants will appear here.</p>
        </div>
        <div v-else class="space-y-3">
          <EntryCard
            v-for="e in allEntries"
            :key="e.id"
            :entry="e"
          />
        </div>
      </div>

      <!-- Rules tab -->
      <div v-else-if="activeTab === 'rules'" class="bg-white rounded-2xl shadow-sm p-5 space-y-4">
        <div>
          <p class="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Date range</p>
          <p class="text-slate-700 text-sm">{{ formatDate(comp.startDate) }} – {{ formatDate(comp.endDate) }}</p>
        </div>

        <div>
          <p class="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Ranked by</p>
          <p class="text-slate-700 text-sm capitalize">{{ rankLabel }}</p>
        </div>

        <div>
          <p class="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Allowed species</p>
          <p v-if="!comp.allowedSpecies || comp.allowedSpecies.length === 0" class="text-slate-700 text-sm">All species</p>
          <div v-else class="flex flex-wrap gap-1.5">
            <span
              v-for="sid in comp.allowedSpecies"
              :key="sid"
              class="text-xs bg-ocean-50 text-ocean-700 px-2 py-1 rounded-lg"
            >
              {{ speciesName(sid) }}
            </span>
          </div>
        </div>

        <div>
          <p class="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Required fields</p>
          <div class="flex flex-wrap gap-2 text-sm text-slate-700">
            <span v-if="comp.requirePhoto" class="bg-slate-100 px-2 py-1 rounded-lg text-xs">Photo</span>
            <span v-if="comp.requireLength" class="bg-slate-100 px-2 py-1 rounded-lg text-xs">Length</span>
            <span v-if="comp.requireWeight" class="bg-slate-100 px-2 py-1 rounded-lg text-xs">Weight</span>
            <span v-if="!comp.requirePhoto && !comp.requireLength && !comp.requireWeight" class="text-slate-400 text-xs">None</span>
          </div>
        </div>

        <div v-if="comp.rules">
          <p class="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Custom rules</p>
          <p class="text-slate-600 text-sm whitespace-pre-line">{{ comp.rules }}</p>
        </div>

        <div>
          <p class="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Visibility</p>
          <p class="text-slate-700 text-sm">{{ comp.public ? 'Public — anyone can join' : 'Invite only' }}</p>
        </div>

        <div v-if="isAdmin && !comp.public" class="border-t border-slate-100 pt-4">
          <p class="text-xs text-slate-400 uppercase tracking-wide font-medium mb-2">Invite code</p>
          <div class="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3">
            <code class="flex-1 font-mono text-lg font-bold text-slate-800 tracking-widest">{{ comp.inviteCode }}</code>
            <button @click="copyInviteLink" class="text-xs text-ocean-600 hover:text-ocean-800 font-medium">
              {{ copied ? 'Copied!' : 'Copy link' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Participants tab -->
      <div v-else-if="activeTab === 'participants'">
        <div v-if="membersLoading" class="flex justify-center py-16">
          <div class="text-3xl animate-bounce">🎣</div>
        </div>
        <div v-else class="bg-white rounded-2xl shadow-sm divide-y divide-slate-100">
          <div
            v-for="m in members"
            :key="m.uid"
            class="flex items-center gap-3 p-4"
          >
            <router-link :to="`/profile/${m.uid}`" class="flex-shrink-0">
              <img v-if="m.photoURL" :src="m.photoURL" class="w-10 h-10 rounded-full border border-slate-100" />
              <div v-else class="w-10 h-10 rounded-full bg-ocean-100 flex items-center justify-center text-lg">🎣</div>
            </router-link>
            <div class="flex-1 min-w-0">
              <router-link :to="`/profile/${m.uid}`" class="font-medium text-slate-800 hover:text-ocean-600 text-sm">
                {{ m.displayName }}
              </router-link>
              <div class="flex items-center gap-2 mt-0.5">
                <span v-if="comp.adminIds?.includes(m.uid)" class="text-xs bg-ocean-100 text-ocean-700 px-1.5 py-0.5 rounded font-medium">Admin</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Leave competition -->
        <div class="mt-5 border-t border-slate-100 pt-5">
          <button
            v-if="!isAdmin || (comp.adminIds?.length > 1)"
            @click="leaveCompetition"
            class="w-full border border-red-200 text-red-500 hover:bg-red-50 transition-colors text-sm font-medium py-2.5 rounded-xl"
          >
            Leave competition
          </button>
          <p v-else class="text-xs text-slate-400 text-center">You're the only admin — you can't leave.</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  doc, getDoc, collection, query, orderBy, where, onSnapshot,
  updateDoc, deleteDoc, arrayRemove,
} from 'firebase/firestore'
import { db } from '../firebase'
import { user } from '../composables/useAuth'
import { fishCatalog } from '../data/fishCatalog'
import { getCompetitionStatus } from '../utils/competitionStatus'
import LeaderboardTable from '../components/LeaderboardTable.vue'
import EntryCard from '../components/EntryCard.vue'

const route = useRoute()
const router = useRouter()

const compId = computed(() => route.params.id)
const comp = ref(null)
const loading = ref(true)
const activeTab = ref('leaderboard')
const allEntries = ref([])
const entriesLoading = ref(true)
const members = ref([])
const membersLoading = ref(true)
const pendingCount = ref(0)
const copied = ref(false)

const tabs = [
  { key: 'leaderboard', label: 'Leaderboard' },
  { key: 'entries', label: 'Entries' },
  { key: 'rules', label: 'Rules' },
  { key: 'participants', label: 'Participants' },
]

const isMember = computed(() => comp.value?.memberIds?.includes(user.value?.uid))
const isAdmin = computed(() => comp.value?.adminIds?.includes(user.value?.uid))
const statusInfo = computed(() => comp.value ? getCompetitionStatus(comp.value.startDate, comp.value.endDate) : {})

const catalogMap = Object.fromEntries(fishCatalog.map(f => [f.id, f]))
function speciesName(id) {
  return catalogMap[id]?.name || id
}

const rankLabel = computed(() => {
  const r = comp.value?.rankBy
  if (r === 'weight') return 'Heaviest catch (weight)'
  if (r === 'length') return 'Longest catch (length)'
  return 'Most catches (count)'
})

let entriesUnsub = null
let pendingUnsub = null

onMounted(async () => {
  const snap = await getDoc(doc(db, 'competitions', compId.value))
  if (snap.exists()) {
    comp.value = { id: snap.id, ...snap.data() }
  }
  loading.value = false

  if (comp.value && comp.value.memberIds?.includes(user.value?.uid)) {
    startEntries()
    startPendingCount()
    loadMembers()
  }
})

onUnmounted(() => {
  if (entriesUnsub) entriesUnsub()
  if (pendingUnsub) pendingUnsub()
})

watch(activeTab, (tab) => {
  if (tab === 'participants' && members.value.length === 0) loadMembers()
})

function startEntries() {
  entriesLoading.value = true
  const q = query(
    collection(db, `competitions/${compId.value}/entries`),
    orderBy('createdAt', 'desc')
  )
  entriesUnsub = onSnapshot(q, (snap) => {
    allEntries.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
    entriesLoading.value = false
  }, () => { entriesLoading.value = false })
}

function startPendingCount() {
  const q = query(
    collection(db, `competitions/${compId.value}/entries`),
    where('status', '==', 'pending')
  )
  pendingUnsub = onSnapshot(q, (snap) => {
    pendingCount.value = snap.size
  })
}

async function loadMembers() {
  membersLoading.value = true
  const memberIds = comp.value.memberIds || []
  const result = []
  for (const uid of memberIds) {
    const mSnap = await getDoc(doc(db, `competitions/${compId.value}/participants/${uid}`))
    if (mSnap.exists()) result.push({ uid, ...mSnap.data() })
  }
  members.value = result
  membersLoading.value = false
}

async function leaveCompetition() {
  if (!confirm('Leave this competition?')) return
  const uid = user.value.uid
  await updateDoc(doc(db, 'competitions', compId.value), {
    memberIds: arrayRemove(uid),
  })
  await deleteDoc(doc(db, `competitions/${compId.value}/participants/${uid}`))
  router.push('/feed')
}

async function copyInviteLink() {
  const link = `${window.location.origin}${import.meta.env.BASE_URL}join-comp/${comp.value.inviteCode}`
  await navigator.clipboard.writeText(link)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}

function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
}
</script>
