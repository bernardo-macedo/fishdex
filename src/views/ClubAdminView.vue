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

    <div v-else-if="!club || !isAdmin" class="text-center py-20">
      <div class="text-5xl mb-4">🚫</div>
      <p class="text-slate-500">Access denied.</p>
    </div>

    <template v-else>
      <div class="flex items-center gap-3 mb-8">
        <router-link :to="`/clubs/${clubId}`" class="text-ocean-600 hover:text-ocean-800 transition-colors">← Back</router-link>
        <h1 class="text-2xl font-bold text-slate-800">Manage club</h1>
      </div>

      <div class="space-y-5">
        <!-- Club name -->
        <div class="bg-white rounded-2xl shadow-sm p-5 space-y-4">
          <h2 class="text-sm font-semibold text-slate-700 uppercase tracking-wide">Club info</h2>
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Club name</label>
            <input
              v-model="form.name"
              type="text"
              maxlength="60"
              class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-ocean-400"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea
              v-model="form.description"
              rows="2"
              maxlength="200"
              placeholder="What's this club about?"
              class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 resize-none"
            />
          </div>
          <button
            @click="saveInfo"
            :disabled="saving"
            class="bg-ocean-600 hover:bg-ocean-700 disabled:bg-ocean-300 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            {{ saving ? 'Saving…' : 'Save changes' }}
          </button>
        </div>

        <!-- Invite code -->
        <div class="bg-white rounded-2xl shadow-sm p-5 space-y-3">
          <h2 class="text-sm font-semibold text-slate-700 uppercase tracking-wide">Invite link</h2>
          <div class="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3">
            <code class="flex-1 font-mono text-lg font-bold text-slate-800 tracking-widest">{{ club.inviteCode }}</code>
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

        <!-- Admins -->
        <div class="bg-white rounded-2xl shadow-sm p-5 space-y-3">
          <h2 class="text-sm font-semibold text-slate-700 uppercase tracking-wide">Admins</h2>
          <div class="divide-y divide-slate-100">
            <div
              v-for="m in adminMembers"
              :key="m.uid"
              class="flex items-center gap-3 py-3"
            >
              <img v-if="m.photoURL" :src="m.photoURL" class="w-8 h-8 rounded-full" />
              <div v-else class="w-8 h-8 rounded-full bg-ocean-100 flex items-center justify-center">🎣</div>
              <span class="flex-1 text-sm font-medium text-slate-700">{{ m.displayName }}</span>
              <button
                v-if="m.uid !== user?.uid"
                @click="demoteAdmin(m)"
                class="text-xs text-slate-300 hover:text-red-400 transition-colors"
              >
                Remove admin
              </button>
              <span v-else class="text-xs text-slate-400">You</span>
            </div>
          </div>

          <!-- Promote member to admin -->
          <div v-if="nonAdminMembers.length > 0" class="pt-3 border-t border-slate-100">
            <p class="text-xs text-slate-500 mb-2">Promote a member to admin:</p>
            <div class="flex gap-2">
              <select
                v-model="promoteUid"
                class="flex-1 border border-slate-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ocean-400"
              >
                <option value="">— Select member —</option>
                <option v-for="m in nonAdminMembers" :key="m.uid" :value="m.uid">{{ m.displayName }}</option>
              </select>
              <button
                @click="promoteToAdmin"
                :disabled="!promoteUid"
                class="bg-ocean-600 hover:bg-ocean-700 disabled:bg-ocean-300 text-white text-sm px-4 py-2 rounded-xl transition-colors"
              >
                Promote
              </button>
            </div>
          </div>
        </div>

        <!-- Danger zone -->
        <div class="bg-white rounded-2xl shadow-sm p-5 space-y-3 border border-red-100">
          <h2 class="text-sm font-semibold text-red-600 uppercase tracking-wide">Danger zone</h2>
          <button
            @click="deleteClub"
            class="text-sm text-red-500 hover:text-red-700 font-medium"
          >
            Delete club permanently
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  doc, getDoc, updateDoc, deleteDoc, arrayUnion, arrayRemove, serverTimestamp, collection, getDocs,
} from 'firebase/firestore'
import { db } from '../firebase'
import { user } from '../composables/useAuth'

const route = useRoute()
const router = useRouter()
const clubId = computed(() => route.params.id)

const club = ref(null)
const loading = ref(true)
const saving = ref(false)
const regenerating = ref(false)
const copied = ref(false)
const promoteUid = ref('')
const allMembers = ref([])

const toast = ref({ show: false, message: '', type: 'success' })

function showToast(message, type = 'success') {
  toast.value = { show: true, message, type }
  setTimeout(() => { toast.value.show = false }, 3000)
}

const form = ref({ name: '', description: '' })

const isAdmin = computed(() => club.value?.adminIds?.includes(user.value?.uid))
const adminMembers = computed(() => allMembers.value.filter((m) => club.value?.adminIds?.includes(m.uid)))
const nonAdminMembers = computed(() => allMembers.value.filter((m) => !club.value?.adminIds?.includes(m.uid)))

onMounted(async () => {
  const snap = await getDoc(doc(db, 'clubs', clubId.value))
  if (snap.exists()) {
    club.value = { id: snap.id, ...snap.data() }
    form.value.name = club.value.name
    form.value.description = club.value.description || ''
    await loadMembers()
  }
  loading.value = false
})

async function loadMembers() {
  const memberIds = club.value.memberIds || []
  const result = []
  for (const uid of memberIds) {
    const mSnap = await getDoc(doc(db, `clubs/${clubId.value}/members/${uid}`))
    if (mSnap.exists()) result.push({ uid, ...mSnap.data() })
  }
  allMembers.value = result
}

async function saveInfo() {
  const name = form.value.name.trim()
  if (!name) return
  saving.value = true
  try {
    await updateDoc(doc(db, 'clubs', clubId.value), {
      name,
      description: form.value.description.trim(),
    })
    club.value.name = name
    club.value.description = form.value.description.trim()
    showToast('Club updated!')
  } catch (e) {
    showToast('Failed to save.', 'error')
  } finally {
    saving.value = false
  }
}

function generateCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase()
}

async function regenerateCode() {
  if (!confirm('This will invalidate the existing invite link. Continue?')) return
  regenerating.value = true
  const code = generateCode()
  await updateDoc(doc(db, 'clubs', clubId.value), { inviteCode: code })
  club.value.inviteCode = code
  regenerating.value = false
}

async function copyInviteLink() {
  const link = `${window.location.origin}${import.meta.env.BASE_URL}join/${club.value.inviteCode}`
  await navigator.clipboard.writeText(link)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}

async function promoteToAdmin() {
  if (!promoteUid.value) return
  await updateDoc(doc(db, 'clubs', clubId.value), {
    adminIds: arrayUnion(promoteUid.value),
  })
  club.value.adminIds = [...(club.value.adminIds || []), promoteUid.value]
  promoteUid.value = ''
  showToast('Admin added!')
}

async function demoteAdmin(member) {
  if (!confirm(`Remove ${member.displayName} as admin?`)) return
  await updateDoc(doc(db, 'clubs', clubId.value), {
    adminIds: arrayRemove(member.uid),
  })
  club.value.adminIds = club.value.adminIds.filter((id) => id !== member.uid)
}

async function deleteClub() {
  if (!confirm(`Permanently delete "${club.value.name}"? This cannot be undone.`)) return
  // Delete members subcollection entries
  const membersSnap = await getDocs(collection(db, `clubs/${clubId.value}/members`))
  for (const d of membersSnap.docs) await deleteDoc(d.ref)
  await deleteDoc(doc(db, 'clubs', clubId.value))
  router.push('/feed')
}
</script>
