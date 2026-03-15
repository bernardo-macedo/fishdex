<template>
  <div class="max-w-2xl mx-auto px-4 py-8">
    <router-link to="/feed" class="text-ocean-600 hover:text-ocean-800 transition-colors inline-flex items-center gap-1 mb-6">
      ← Back to feed
    </router-link>

    <div v-if="loading" class="flex justify-center py-20">
      <div class="text-4xl animate-bounce">🎣</div>
    </div>

    <div v-else>
      <!-- Profile header -->
      <div class="flex items-center gap-4 mb-8">
        <img
          v-if="profilePhoto"
          :src="profilePhoto"
          class="w-16 h-16 rounded-full border-4 border-ocean-100"
        />
        <div v-else class="w-16 h-16 rounded-full bg-ocean-100 flex items-center justify-center text-3xl">🎣</div>
        <div>
          <h1 class="text-2xl font-bold text-slate-800">{{ profileName }}</h1>
          <p class="text-slate-500 mt-0.5">
            <span class="font-semibold text-ocean-600">{{ catches.length }}</span>
            public {{ catches.length === 1 ? 'catch' : 'catches' }}
          </p>
        </div>
      </div>

      <div v-if="catches.length === 0" class="text-center py-16 text-slate-400">
        No public catches yet.
      </div>

      <!-- Feed-style list for this user -->
      <div class="space-y-6">
        <FeedCard
          v-for="c in catches"
          :key="c.id"
          :catch_="c"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore'
import { useRoute } from 'vue-router'
import { db } from '../firebase'
import FeedCard from '../components/FeedCard.vue'

const route = useRoute()
const catches = ref([])
const loading = ref(true)
const profileName = ref('')
const profilePhoto = ref('')
let unsubscribe = null

onMounted(() => {
  const q = query(
    collection(db, 'feed'),
    where('userId', '==', route.params.uid),
    orderBy('createdAt', 'desc')
  )
  unsubscribe = onSnapshot(q, (snap) => {
    catches.value = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
    if (catches.value.length > 0) {
      profileName.value = catches.value[0].userDisplayName
      profilePhoto.value = catches.value[0].userPhotoURL
    }
    loading.value = false
  })
})

onUnmounted(() => {
  if (unsubscribe) unsubscribe()
})
</script>
