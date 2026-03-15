<template>
  <div class="max-w-xl mx-auto px-4 py-8">
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-slate-800">Feed</h1>
      <p class="text-slate-500 mt-1">Catches from the community</p>
    </div>

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
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import FeedCard from '../components/FeedCard.vue'

const catches = ref([])
const loading = ref(true)
let unsubscribe = null

onMounted(() => {
  const q = query(collection(db, 'feed'), orderBy('createdAt', 'desc'))
  unsubscribe = onSnapshot(q, (snap) => {
    catches.value = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
    loading.value = false
  })
})

onUnmounted(() => {
  if (unsubscribe) unsubscribe()
})
</script>
