<template>
  <div class="max-w-xl mx-auto px-4 py-8">
    <!-- Loading -->
    <div v-if="loading" class="flex justify-center py-20">
      <div class="text-4xl animate-bounce">🎣</div>
    </div>

    <!-- Not found -->
    <div v-else-if="!club" class="text-center py-20">
      <div class="text-5xl mb-4">🤔</div>
      <p class="text-slate-500">Club not found.</p>
    </div>

    <!-- Not a member -->
    <div v-else-if="!isMember" class="text-center py-20">
      <div class="text-5xl mb-4">🔒</div>
      <p class="text-slate-700 font-semibold mb-2">Members only</p>
      <p class="text-slate-400 text-sm">You're not a member of this club.</p>
    </div>

    <template v-else>
      <!-- Header -->
      <div class="flex items-start justify-between mb-6 gap-3">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <router-link to="/feed" class="text-ocean-600 hover:text-ocean-800 text-sm">← Feed</router-link>
          </div>
          <h1 class="text-2xl font-bold text-slate-800">{{ club.name }}</h1>
          <p v-if="club.description" class="text-slate-500 text-sm mt-0.5">{{ club.description }}</p>
          <p class="text-xs text-slate-400 mt-1">{{ club.memberIds?.length || 0 }} member{{ club.memberIds?.length !== 1 ? 's' : '' }}</p>
        </div>
        <router-link
          v-if="isAdmin"
          :to="`/clubs/${clubId}/admin`"
          class="text-sm bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1.5 rounded-xl transition-colors flex-shrink-0"
        >
          ⚙️ Manage
        </router-link>
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

      <!-- Feed tab -->
      <div v-if="activeTab === 'feed'">
        <!-- Admin: post message -->
        <div v-if="isAdmin" class="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-5">
          <p class="text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Post a club message</p>
          <textarea
            v-model="newMessage"
            rows="2"
            placeholder="Share something with the club…"
            class="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 resize-none"
          />
          <div class="flex justify-end mt-2">
            <button
              @click="postMessage"
              :disabled="!newMessage.trim() || posting"
              class="bg-ocean-600 hover:bg-ocean-700 disabled:bg-ocean-300 text-white text-sm font-medium px-4 py-1.5 rounded-xl transition-colors"
            >
              {{ posting ? 'Posting…' : 'Post' }}
            </button>
          </div>
        </div>

        <!-- How to share hint -->
        <div class="flex items-start gap-2.5 bg-ocean-50 border border-ocean-100 rounded-xl px-4 py-3 mb-5 text-sm text-ocean-700">
          <span class="text-base leading-tight mt-0.5">💡</span>
          <span>Share any catch to this club by opening it and toggling <strong>Share to club</strong>, or when logging a new catch.</span>
        </div>

        <div v-if="postsLoading" class="flex justify-center py-16">
          <div class="text-3xl animate-bounce">🎣</div>
        </div>
        <div v-else-if="posts.length === 0" class="text-center py-12">
          <div class="text-5xl mb-3">🌊</div>
          <p class="text-slate-700 font-semibold mb-1">No posts yet</p>
          <p class="text-slate-400 text-sm mb-5">Log a catch and share it to this club, or edit an existing catch to share it here.</p>
          <router-link
            to="/add"
            class="inline-block bg-ocean-600 hover:bg-ocean-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            + Log a catch
          </router-link>
        </div>
        <div v-else class="space-y-5">
          <ClubPostCard
            v-for="p in posts"
            :key="p.id"
            :post="p"
            :clubId="clubId"
          />
        </div>
      </div>

      <!-- Members tab -->
      <div v-else-if="activeTab === 'members'">
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
                <span v-if="club.adminIds?.includes(m.uid)" class="text-xs bg-ocean-100 text-ocean-700 px-1.5 py-0.5 rounded font-medium">Admin</span>
              </div>
            </div>
            <!-- Admin: kick member (not self, not other admins) -->
            <button
              v-if="isAdmin && m.uid !== user?.uid && !club.adminIds?.includes(m.uid)"
              @click="kickMember(m)"
              class="text-xs text-slate-300 hover:text-red-400 transition-colors"
            >
              Remove
            </button>
          </div>
        </div>
        <!-- Leave club -->
        <div class="mt-5 border-t border-slate-100 pt-5">
          <button
            v-if="!isAdmin || (club.adminIds?.length > 1)"
            @click="leaveClub"
            class="w-full border border-red-200 text-red-500 hover:bg-red-50 transition-colors text-sm font-medium py-2.5 rounded-xl"
          >
            Leave club
          </button>
          <p v-else class="text-xs text-slate-400 text-center">You're the only admin — transfer admin rights before leaving.</p>
        </div>
      </div>

      <!-- About tab -->
      <div v-else-if="activeTab === 'about'" class="bg-white rounded-2xl shadow-sm p-5 space-y-4">
        <div>
          <p class="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Club name</p>
          <p class="text-slate-800 font-semibold">{{ club.name }}</p>
        </div>
        <div v-if="club.description">
          <p class="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">About</p>
          <p class="text-slate-600 text-sm">{{ club.description }}</p>
        </div>
        <div>
          <p class="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Members</p>
          <p class="text-slate-600 text-sm">{{ club.memberIds?.length || 0 }}</p>
        </div>
        <div v-if="isAdmin" class="border-t border-slate-100 pt-4">
          <p class="text-xs text-slate-400 uppercase tracking-wide font-medium mb-2">Invite code</p>
          <div class="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3">
            <code class="flex-1 font-mono text-lg font-bold text-slate-800 tracking-widest">{{ club.inviteCode }}</code>
            <button
              @click="copyInviteLink"
              class="text-xs text-ocean-600 hover:text-ocean-800 font-medium"
            >
              {{ copied ? 'Copied!' : 'Copy link' }}
            </button>
          </div>
          <p class="text-xs text-slate-400 mt-2">Share this link so others can join the club.</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  doc, getDoc, collection, query, orderBy, onSnapshot,
  addDoc, updateDoc, deleteDoc, arrayRemove, serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'
import { user } from '../composables/useAuth'
import ClubPostCard from '../components/ClubPostCard.vue'

const route = useRoute()
const router = useRouter()

const clubId = computed(() => route.params.id)
const club = ref(null)
const loading = ref(true)
const posts = ref([])
const postsLoading = ref(true)
const members = ref([])
const membersLoading = ref(true)
const activeTab = ref('feed')
const newMessage = ref('')
const posting = ref(false)
const copied = ref(false)

const tabs = [
  { key: 'feed', label: 'Feed' },
  { key: 'members', label: 'Members' },
  { key: 'about', label: 'About' },
]

const isMember = computed(() => club.value?.memberIds?.includes(user.value?.uid))
const isAdmin = computed(() => club.value?.adminIds?.includes(user.value?.uid))

let postsUnsub = null

onMounted(async () => {
  const snap = await getDoc(doc(db, 'clubs', clubId.value))
  if (snap.exists()) {
    club.value = { id: snap.id, ...snap.data() }
  }
  loading.value = false

  if (club.value && club.value.memberIds?.includes(user.value?.uid)) {
    startPosts()
    loadMembers()
  }
})

onUnmounted(() => {
  if (postsUnsub) postsUnsub()
})

watch(activeTab, (tab) => {
  if (tab === 'members' && members.value.length === 0) loadMembers()
})

function startPosts() {
  postsLoading.value = true
  const q = query(
    collection(db, `clubs/${clubId.value}/posts`),
    orderBy('createdAt', 'desc')
  )
  postsUnsub = onSnapshot(q, (snap) => {
    posts.value = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
    postsLoading.value = false
  }, () => { postsLoading.value = false })
}

async function loadMembers() {
  membersLoading.value = true
  const snap = await getDoc(doc(db, 'clubs', clubId.value))
  if (!snap.exists()) return
  const memberIds = snap.data().memberIds || []
  const adminIds = snap.data().adminIds || []
  const result = []
  for (const uid of memberIds) {
    const mSnap = await getDoc(doc(db, `clubs/${clubId.value}/members/${uid}`))
    if (mSnap.exists()) {
      result.push({ uid, ...mSnap.data(), isAdmin: adminIds.includes(uid) })
    }
  }
  members.value = result
  membersLoading.value = false
}

async function postMessage() {
  const text = newMessage.value.trim()
  if (!text || posting.value) return
  posting.value = true
  try {
    await addDoc(collection(db, `clubs/${clubId.value}/posts`), {
      type: 'message',
      text,
      userId: user.value.uid,
      userDisplayName: user.value.displayName,
      userPhotoURL: user.value.photoURL || '',
      likesCount: 0,
      commentsCount: 0,
      createdAt: serverTimestamp(),
    })
    newMessage.value = ''
  } finally {
    posting.value = false
  }
}

async function kickMember(member) {
  if (!confirm(`Remove ${member.displayName} from the club?`)) return
  await updateDoc(doc(db, 'clubs', clubId.value), {
    memberIds: arrayRemove(member.uid),
  })
  await deleteDoc(doc(db, `clubs/${clubId.value}/members/${member.uid}`))
  members.value = members.value.filter((m) => m.uid !== member.uid)
}

async function leaveClub() {
  if (!confirm('Leave this club?')) return
  const uid = user.value.uid
  await updateDoc(doc(db, 'clubs', clubId.value), {
    memberIds: arrayRemove(uid),
  })
  await deleteDoc(doc(db, `clubs/${clubId.value}/members/${uid}`))
  router.push('/feed')
}

async function copyInviteLink() {
  const link = `${window.location.origin}${import.meta.env.BASE_URL}join/${club.value.inviteCode}`
  await navigator.clipboard.writeText(link)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}
</script>
