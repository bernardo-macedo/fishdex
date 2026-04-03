<template>
  <div class="max-w-xl mx-auto px-4 py-8">
    <!-- Toast -->
    <Teleport to="body">
      <div
        v-if="toast.show"
        :class="toast.type === 'error' ? 'bg-red-500' : 'bg-green-500'"
        class="fixed top-4 left-1/2 -translate-x-1/2 z-50 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-lg transition-all"
      >
        {{ toast.message }}
      </div>
    </Teleport>

    <div v-if="loading" class="flex justify-center py-20">
      <div class="text-4xl animate-bounce">🎣</div>
    </div>

    <div v-else-if="!comp || !isAdmin" class="text-center py-20">
      <div class="text-5xl mb-4">🚫</div>
      <p class="text-slate-500">Access denied.</p>
    </div>

    <template v-else>
      <div class="flex items-center gap-3 mb-8">
        <router-link :to="`/competitions/${compId}`" class="text-ocean-600 hover:text-ocean-800 transition-colors">← Back</router-link>
        <h1 class="text-2xl font-bold text-slate-800">Manage competition</h1>
      </div>

      <div class="space-y-5">
        <!-- Competition info -->
        <div class="bg-white rounded-2xl shadow-sm p-5 space-y-4">
          <h2 class="text-sm font-semibold text-slate-700 uppercase tracking-wide">Competition info</h2>
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Title</label>
            <input
              v-model="form.title"
              type="text"
              maxlength="80"
              class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-ocean-400"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea
              v-model="form.description"
              rows="2"
              maxlength="300"
              class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 resize-none"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Rules</label>
            <textarea
              v-model="form.rules"
              rows="3"
              maxlength="500"
              class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 resize-none"
            />
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Start date</label>
              <input v-model="form.startDate" type="date" class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-ocean-400" />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">End date</label>
              <input v-model="form.endDate" type="date" class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-ocean-400" />
            </div>
          </div>
          <SpeciesPicker v-model="form.allowedSpecies" />
          <div>
            <p class="text-sm font-medium text-slate-700 mb-2">Required fields</p>
            <div class="space-y-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" v-model="form.requirePhoto" class="rounded border-slate-300 text-ocean-600 focus:ring-ocean-400" />
                <span class="text-sm text-slate-700">Photo required</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" v-model="form.requireLength" class="rounded border-slate-300 text-ocean-600 focus:ring-ocean-400" />
                <span class="text-sm text-slate-700">Length required</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" v-model="form.requireWeight" class="rounded border-slate-300 text-ocean-600 focus:ring-ocean-400" />
                <span class="text-sm text-slate-700">Weight required</span>
              </label>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Rank by</label>
            <select v-model="form.rankBy" class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-ocean-400 appearance-none">
              <option value="weight">Heaviest catch (weight)</option>
              <option value="length">Longest catch (length)</option>
              <option value="count">Most catches (count)</option>
            </select>
          </div>
          <button
            @click="saveInfo"
            :disabled="saving"
            class="bg-ocean-600 hover:bg-ocean-700 disabled:bg-ocean-300 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            {{ saving ? 'Saving…' : 'Save changes' }}
          </button>
        </div>

        <!-- Pending entries -->
        <div class="bg-white rounded-2xl shadow-sm p-5 space-y-3">
          <h2 class="text-sm font-semibold text-slate-700 uppercase tracking-wide">
            Pending submissions
            <span v-if="pendingEntries.length > 0" class="ml-1 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">{{ pendingEntries.length }}</span>
          </h2>
          <div v-if="entriesLoading" class="flex justify-center py-8">
            <div class="text-2xl animate-bounce">🎣</div>
          </div>
          <div v-else-if="pendingEntries.length === 0" class="text-center py-4">
            <p class="text-slate-400 text-sm">No pending submissions.</p>
          </div>
          <div v-else class="space-y-3">
            <EntryCard
              v-for="e in pendingEntries"
              :key="e.id"
              :entry="e"
              :showActions="true"
              @approve="approveEntry"
              @reject="rejectEntry"
            />
          </div>
        </div>

        <!-- All entries -->
        <div class="bg-white rounded-2xl shadow-sm p-5 space-y-3">
          <h2 class="text-sm font-semibold text-slate-700 uppercase tracking-wide">All submissions ({{ allEntries.length }})</h2>
          <div v-if="allEntries.length === 0" class="text-center py-4">
            <p class="text-slate-400 text-sm">No submissions yet.</p>
          </div>
          <div v-else class="space-y-3">
            <EntryCard
              v-for="e in allEntries"
              :key="e.id"
              :entry="e"
              :showActions="e.status === 'pending'"
              @approve="approveEntry"
              @reject="rejectEntry"
            />
          </div>
        </div>

        <!-- Invite code (for invite-only) -->
        <div v-if="!comp.public" class="bg-white rounded-2xl shadow-sm p-5 space-y-3">
          <h2 class="text-sm font-semibold text-slate-700 uppercase tracking-wide">Invite link</h2>
          <div class="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3">
            <code class="flex-1 font-mono text-lg font-bold text-slate-800 tracking-widest">{{ comp.inviteCode }}</code>
            <button @click="copyInviteLink" class="text-xs text-ocean-600 hover:text-ocean-800 font-medium">
              {{ copied ? 'Copied!' : 'Copy link' }}
            </button>
          </div>
          <button
            @click="regenerateCode"
            :disabled="regenerating"
            class="text-xs text-slate-400 hover:text-red-500 transition-colors"
          >
            {{ regenerating ? 'Regenerating…' : 'Regenerate code (invalidates old link)' }}
          </button>
        </div>

        <!-- Participants -->
        <div class="bg-white rounded-2xl shadow-sm p-5 space-y-3">
          <h2 class="text-sm font-semibold text-slate-700 uppercase tracking-wide">Participants</h2>
          <div class="divide-y divide-slate-100">
            <div
              v-for="m in allMembers"
              :key="m.uid"
              class="flex items-center gap-3 py-3"
            >
              <img v-if="m.photoURL" :src="m.photoURL" class="w-8 h-8 rounded-full" />
              <div v-else class="w-8 h-8 rounded-full bg-ocean-100 flex items-center justify-center">🎣</div>
              <span class="flex-1 text-sm font-medium text-slate-700">{{ m.displayName }}</span>
              <span v-if="comp.adminIds?.includes(m.uid)" class="text-xs bg-ocean-100 text-ocean-700 px-1.5 py-0.5 rounded font-medium">Admin</span>
              <button
                v-if="m.uid !== user?.uid && !comp.adminIds?.includes(m.uid)"
                @click="removeMember(m)"
                class="text-xs text-slate-300 hover:text-red-400 transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        </div>

        <!-- Danger zone -->
        <div class="bg-white rounded-2xl shadow-sm p-5 space-y-3 border border-red-100">
          <h2 class="text-sm font-semibold text-red-600 uppercase tracking-wide">Danger zone</h2>
          <button
            @click="deleteCompetition"
            class="text-sm text-red-500 hover:text-red-700 font-medium"
          >
            Delete competition permanently
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  doc, getDoc, updateDoc, deleteDoc, collection, getDocs, query, orderBy, onSnapshot,
  arrayRemove, serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'
import { user } from '../composables/useAuth'
import SpeciesPicker from '../components/SpeciesPicker.vue'
import EntryCard from '../components/EntryCard.vue'

const route = useRoute()
const router = useRouter()
const compId = computed(() => route.params.id)

const comp = ref(null)
const loading = ref(true)
const saving = ref(false)
const regenerating = ref(false)
const copied = ref(false)
const allMembers = ref([])
const allEntries = ref([])
const entriesLoading = ref(true)

const toast = ref({ show: false, message: '', type: 'success' })
function showToast(message, type = 'success') {
  toast.value = { show: true, message, type }
  setTimeout(() => { toast.value.show = false }, 3000)
}

const form = ref({
  title: '', description: '', rules: '', startDate: '', endDate: '',
  allowedSpecies: [], requirePhoto: false, requireLength: false, requireWeight: false, rankBy: 'weight',
})

const isAdmin = computed(() => comp.value?.adminIds?.includes(user.value?.uid))
const pendingEntries = computed(() => allEntries.value.filter(e => e.status === 'pending'))

let entriesUnsub = null

onMounted(async () => {
  const snap = await getDoc(doc(db, 'competitions', compId.value))
  if (snap.exists()) {
    comp.value = { id: snap.id, ...snap.data() }
    form.value = {
      title: comp.value.title || '',
      description: comp.value.description || '',
      rules: comp.value.rules || '',
      startDate: comp.value.startDate || '',
      endDate: comp.value.endDate || '',
      allowedSpecies: comp.value.allowedSpecies || [],
      requirePhoto: comp.value.requirePhoto || false,
      requireLength: comp.value.requireLength || false,
      requireWeight: comp.value.requireWeight || false,
      rankBy: comp.value.rankBy || 'weight',
    }
    await loadMembers()
    startEntries()
  }
  loading.value = false
})

onUnmounted(() => {
  if (entriesUnsub) entriesUnsub()
})

function startEntries() {
  const q = query(
    collection(db, `competitions/${compId.value}/entries`),
    orderBy('createdAt', 'desc')
  )
  entriesUnsub = onSnapshot(q, (snap) => {
    allEntries.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
    entriesLoading.value = false
  }, () => { entriesLoading.value = false })
}

async function loadMembers() {
  const memberIds = comp.value.memberIds || []
  const result = []
  for (const uid of memberIds) {
    const mSnap = await getDoc(doc(db, `competitions/${compId.value}/participants/${uid}`))
    if (mSnap.exists()) result.push({ uid, ...mSnap.data() })
  }
  allMembers.value = result
}

async function saveInfo() {
  const title = form.value.title.trim()
  if (!title) return
  saving.value = true
  try {
    await updateDoc(doc(db, 'competitions', compId.value), {
      title,
      description: form.value.description.trim(),
      rules: form.value.rules.trim(),
      startDate: form.value.startDate,
      endDate: form.value.endDate,
      allowedSpecies: form.value.allowedSpecies,
      requirePhoto: form.value.requirePhoto,
      requireLength: form.value.requireLength,
      requireWeight: form.value.requireWeight,
      rankBy: form.value.rankBy,
    })
    comp.value.title = title
    comp.value.description = form.value.description.trim()
    showToast('Competition updated!')
  } catch (e) {
    showToast('Failed to save.', 'error')
  } finally {
    saving.value = false
  }
}

async function approveEntry(entry) {
  await updateDoc(doc(db, `competitions/${compId.value}/entries/${entry.id}`), {
    status: 'approved',
  })
  showToast('Entry approved!')
}

async function rejectEntry(entry) {
  if (!confirm('Reject this submission?')) return
  await updateDoc(doc(db, `competitions/${compId.value}/entries/${entry.id}`), {
    status: 'rejected',
  })
  showToast('Entry rejected.')
}

function generateCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase()
}

async function regenerateCode() {
  if (!confirm('This will invalidate the existing invite link. Continue?')) return
  regenerating.value = true
  const code = generateCode()
  await updateDoc(doc(db, 'competitions', compId.value), { inviteCode: code })
  comp.value.inviteCode = code
  regenerating.value = false
}

async function copyInviteLink() {
  const link = `${window.location.origin}${import.meta.env.BASE_URL}join-comp/${comp.value.inviteCode}`
  await navigator.clipboard.writeText(link)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}

async function removeMember(member) {
  if (!confirm(`Remove ${member.displayName} from the competition?`)) return
  await updateDoc(doc(db, 'competitions', compId.value), {
    memberIds: arrayRemove(member.uid),
  })
  await deleteDoc(doc(db, `competitions/${compId.value}/participants/${member.uid}`))
  allMembers.value = allMembers.value.filter(m => m.uid !== member.uid)
}

async function deleteCompetition() {
  if (!confirm(`Permanently delete "${comp.value.title}"? This cannot be undone.`)) return
  // Delete participants subcollection
  const partSnap = await getDocs(collection(db, `competitions/${compId.value}/participants`))
  for (const d of partSnap.docs) await deleteDoc(d.ref)
  // Delete entries subcollection
  const entrySnap = await getDocs(collection(db, `competitions/${compId.value}/entries`))
  for (const d of entrySnap.docs) await deleteDoc(d.ref)
  // Delete competition
  await deleteDoc(doc(db, 'competitions', compId.value))
  router.push('/feed')
}
</script>
