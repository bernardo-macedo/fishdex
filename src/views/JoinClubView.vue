<template>
  <div class="max-w-sm mx-auto px-4 py-16 text-center">
    <div v-if="loading" class="text-4xl animate-bounce mb-4">🎣</div>

    <div v-else-if="joined">
      <div class="text-5xl mb-4">🎉</div>
      <h1 class="text-2xl font-bold text-slate-800 mb-2">You're in!</h1>
      <p class="text-slate-500 text-sm mb-6">You've joined <strong>{{ clubName }}</strong>.</p>
      <router-link
        :to="`/clubs/${clubId}`"
        class="bg-ocean-600 hover:bg-ocean-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
      >
        Go to club
      </router-link>
    </div>

    <div v-else-if="alreadyMember">
      <div class="text-5xl mb-4">👍</div>
      <h1 class="text-2xl font-bold text-slate-800 mb-2">Already a member</h1>
      <p class="text-slate-500 text-sm mb-6">You're already in <strong>{{ clubName }}</strong>.</p>
      <router-link
        :to="`/clubs/${clubId}`"
        class="bg-ocean-600 hover:bg-ocean-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
      >
        Go to club
      </router-link>
    </div>

    <div v-else-if="notFound">
      <div class="text-5xl mb-4">🤔</div>
      <h1 class="text-2xl font-bold text-slate-800 mb-2">Invalid link</h1>
      <p class="text-slate-500 text-sm mb-6">This invite link is invalid or has expired.</p>
      <router-link to="/feed" class="text-ocean-600 hover:text-ocean-800 font-medium">Back to Feed</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import {
  collection, query, where, getDocs, doc, updateDoc, setDoc, arrayUnion, serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'
import { user } from '../composables/useAuth'

const route = useRoute()
const loading = ref(true)
const joined = ref(false)
const alreadyMember = ref(false)
const notFound = ref(false)
const clubName = ref('')
const clubId = ref('')

onMounted(async () => {
  try {
    const code = route.params.code?.toUpperCase()
    const q = query(collection(db, 'clubs'), where('inviteCode', '==', code))
    const snap = await getDocs(q)

    if (snap.empty) {
      notFound.value = true
      loading.value = false
      return
    }

    const clubDoc = snap.docs[0]
    clubId.value = clubDoc.id
    const data = clubDoc.data()
    clubName.value = data.name

    const uid = user.value.uid

    if (data.memberIds?.includes(uid)) {
      alreadyMember.value = true
      loading.value = false
      return
    }

    // Join the club
    await updateDoc(doc(db, 'clubs', clubId.value), {
      memberIds: arrayUnion(uid),
    })
    await setDoc(doc(db, `clubs/${clubId.value}/members/${uid}`), {
      displayName: user.value.displayName,
      photoURL: user.value.photoURL || '',
      joinedAt: serverTimestamp(),
    })

    joined.value = true
  } catch (e) {
    console.error(e)
    notFound.value = true
  } finally {
    loading.value = false
  }
})
</script>
