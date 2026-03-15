<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-slate-800">My Catches</h1>
      <p class="text-slate-500 mt-1">{{ fish.length }} fish caught so far</p>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="flex justify-center py-20">
      <div class="text-4xl animate-bounce">🎣</div>
    </div>

    <!-- Empty state -->
    <div v-else-if="fish.length === 0" class="text-center py-20">
      <div class="text-7xl mb-4">🐡</div>
      <h2 class="text-xl font-semibold text-slate-600 mb-2">No catches yet!</h2>
      <p class="text-slate-400 mb-6">Start logging your fishing adventures</p>
      <router-link
        to="/add"
        class="bg-ocean-600 hover:bg-ocean-700 text-white px-6 py-3 rounded-xl font-medium transition-colors inline-block"
      >
        Log your first catch
      </router-link>
    </div>

    <!-- Fish grid -->
    <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <FishCard v-for="f in fish" :key="f.id" :fish="f" />
    </div>

    <!-- FAB — desktop only (mobile uses bottom tab bar) -->
    <router-link
      to="/add"
      class="hidden sm:flex fixed bottom-6 right-6 bg-ocean-600 hover:bg-ocean-700 text-white w-14 h-14 rounded-full items-center justify-center text-2xl shadow-lg hover:shadow-xl transition-all hover:scale-110"
      title="Add new catch"
    >
      +
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { user } from '../composables/useAuth'
import FishCard from '../components/FishCard.vue'

const fish = ref([])
const loading = ref(true)
let unsubscribe = null

onMounted(() => {
  if (!user.value) return

  const q = query(
    collection(db, `users/${user.value.uid}/fish`),
    orderBy('createdAt', 'desc')
  )

  unsubscribe = onSnapshot(q, (snapshot) => {
    fish.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    loading.value = false
  }, (err) => {
    console.error('Firestore read error:', err)
    loading.value = false
  })
})

onUnmounted(() => {
  if (unsubscribe) unsubscribe()
})
</script>
