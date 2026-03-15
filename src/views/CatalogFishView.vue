<template>
  <div class="max-w-2xl mx-auto px-4 py-8">
    <router-link to="/catalog" class="text-ocean-600 hover:text-ocean-800 transition-colors inline-flex items-center gap-1 mb-6">
      ← Back to Catalog
    </router-link>

    <div v-if="!fish" class="text-center py-20 text-slate-400">Fish not found.</div>

    <div v-else>
      <!-- Hero image -->
      <div class="relative rounded-2xl overflow-hidden bg-ocean-100 mb-6 aspect-video shadow-lg">
        <img
          v-if="fish.image"
          :src="fish.image"
          :alt="fish.name"
          class="w-full h-full object-cover"
          @error="(e) => e.target.style.display = 'none'"
        />
        <div class="absolute inset-0 flex items-center justify-center text-9xl pointer-events-none">
          {{ fish.emoji }}
        </div>

        <!-- Caught badge -->
        <div
          v-if="isCaught"
          class="absolute top-4 right-4 bg-ocean-500 text-white font-bold px-4 py-1.5 rounded-full shadow-lg text-sm"
        >
          ✓ Caught!
        </div>
        <div
          v-else
          class="absolute top-4 right-4 bg-black/40 text-white px-4 py-1.5 rounded-full text-sm"
        >
          🎯 Not caught yet
        </div>
      </div>

      <!-- Name & species -->
      <div class="mb-6">
        <div class="flex items-center gap-3 flex-wrap">
          <h1 class="text-3xl font-bold text-slate-800">{{ fish.name }}</h1>
          <span class="text-sm px-3 py-1 rounded-full font-medium"
            :class="{
              'bg-blue-100 text-blue-700': fish.habitat === 'Freshwater',
              'bg-cyan-100 text-cyan-700': fish.habitat === 'Saltwater',
              'bg-teal-100 text-teal-700': fish.habitat === 'Freshwater & Saltwater',
            }"
          >
            {{ fish.habitat }}
          </span>
        </div>
        <p class="text-ocean-600 italic mt-1">{{ fish.species }}</p>
        <p class="text-slate-600 mt-3 leading-relaxed">{{ fish.description }}</p>
      </div>

      <!-- Info cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <InfoCard title="📍 Where to find it" :items="fish.locations" />
        <InfoCard title="🪱 Best bait & lures" :items="fish.bait" />

        <div class="bg-white rounded-2xl shadow-sm p-4 border border-slate-100">
          <div class="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">🕐 Best time of day</div>
          <p class="text-slate-700">{{ fish.bestTime }}</p>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-4 border border-slate-100">
          <div class="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">📅 Best season</div>
          <p class="text-slate-700">{{ fish.season }}</p>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-4 border border-slate-100 sm:col-span-2">
          <div class="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">🎯 Difficulty</div>
          <p class="text-slate-700 font-medium">{{ fish.difficulty }}</p>
        </div>
      </div>

      <!-- User's catches of this species -->
      <div v-if="userCatches.length > 0">
        <h2 class="text-xl font-bold text-slate-800 mb-3">Your catches ({{ userCatches.length }})</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <router-link
            v-for="catch_ in userCatches"
            :key="catch_.id"
            :to="`/fish/${catch_.id}`"
            class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-slate-100"
          >
            <div class="aspect-square bg-ocean-50">
              <img
                v-if="catch_.photoUrl"
                :src="catch_.photoUrl"
                :alt="catch_.name"
                class="w-full h-full object-cover"
              />
              <div v-else class="w-full h-full flex items-center justify-center text-4xl">🐟</div>
            </div>
            <div class="p-2">
              <p class="text-sm font-medium text-slate-700 truncate">{{ catch_.name }}</p>
              <p class="text-xs text-slate-400">{{ formatDate(catch_.date) }}</p>
              <div class="flex gap-1 mt-1 flex-wrap">
                <span v-if="catch_.length" class="text-xs text-ocean-600">{{ catch_.length }}cm</span>
                <span v-if="catch_.weight" class="text-xs text-ocean-600">· {{ catch_.weight }}kg</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- CTA if not caught -->
      <div v-else-if="!isCaught" class="mt-4 bg-ocean-50 rounded-2xl p-6 text-center">
        <p class="text-slate-500 mb-3">You haven't caught this species yet!</p>
        <router-link
          to="/add"
          class="bg-ocean-600 hover:bg-ocean-700 text-white px-6 py-2.5 rounded-xl font-medium transition-colors inline-block"
        >
          Log a catch
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { collection, onSnapshot } from 'firebase/firestore'
import { useRoute } from 'vue-router'
import { db } from '../firebase'
import { user } from '../composables/useAuth'
import { getFishById } from '../data/fishCatalog'

// Small inline component for list-style info cards
const InfoCard = {
  props: ['title', 'items'],
  template: `
    <div class="bg-white rounded-2xl shadow-sm p-4 border border-slate-100">
      <div class="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">{{ title }}</div>
      <ul class="space-y-1">
        <li v-for="item in items" :key="item" class="text-slate-700 text-sm flex items-start gap-1.5">
          <span class="text-ocean-400 mt-0.5">•</span>{{ item }}
        </li>
      </ul>
    </div>
  `,
}

const route = useRoute()
const fish = computed(() => getFishById(route.params.id))
const allUserFish = ref([])
let unsubscribe = null

onMounted(() => {
  if (!user.value) return
  unsubscribe = onSnapshot(
    collection(db, `users/${user.value.uid}/fish`),
    (snapshot) => {
      allUserFish.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    }
  )
})

onUnmounted(() => {
  if (unsubscribe) unsubscribe()
})

const userCatches = computed(() => {
  if (!fish.value) return []
  const nameLower = fish.value.name.toLowerCase()
  const speciesLower = fish.value.species.toLowerCase()
  return allUserFish.value.filter((c) => {
    // Direct catalogId match first
    if (c.catalogId) return c.catalogId === fish.value.id
    // Fallback fuzzy match
    const cn = (c.name || '').toLowerCase()
    const cs = (c.species || '').toLowerCase()
    return cn === nameLower || cs === speciesLower
  })
})

const isCaught = computed(() => userCatches.value.length > 0)

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
</script>
