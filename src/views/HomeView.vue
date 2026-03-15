<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <!-- Header -->
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-slate-800">My Catches</h1>
      <p class="text-slate-500 mt-1">{{ filteredFish.length }} of {{ fish.length }} catches</p>
    </div>

    <!-- Search + filters bar -->
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-6 space-y-3">
      <!-- Search -->
      <input
        v-model="search"
        type="search"
        placeholder="Search by name, species or location…"
        class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent text-sm"
      />

      <div class="flex flex-wrap gap-2">
        <!-- Year filter -->
        <div class="relative">
          <select
            v-model="selectedYear"
            class="border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-ocean-400 appearance-none pr-7"
          >
            <option value="">All years</option>
            <option v-for="y in availableYears" :key="y" :value="y">{{ y }}</option>
          </select>
          <div class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 text-xs">▾</div>
        </div>

        <!-- Sort -->
        <div class="relative">
          <select
            v-model="sortBy"
            class="border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-ocean-400 appearance-none pr-7"
          >
            <option value="date_desc">Newest first</option>
            <option value="date_asc">Oldest first</option>
            <option value="weight_desc">Heaviest first</option>
            <option value="length_desc">Longest first</option>
            <option value="name_asc">Name A–Z</option>
          </select>
          <div class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 text-xs">▾</div>
        </div>

        <!-- Clear button -->
        <button
          v-if="search || selectedYear || sortBy !== 'date_desc'"
          @click="clearFilters"
          class="text-xs text-slate-400 hover:text-slate-600 border border-slate-200 rounded-xl px-3 py-2 transition-colors"
        >
          Clear
        </button>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="flex justify-center py-20">
      <div class="text-4xl animate-bounce">🎣</div>
    </div>

    <!-- No catches at all -->
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

    <!-- No results for current filter -->
    <div v-else-if="filteredFish.length === 0" class="text-center py-20 text-slate-400">
      <div class="text-5xl mb-4">🔍</div>
      <p>No catches match your search.</p>
      <button @click="clearFilters" class="mt-3 text-ocean-600 hover:underline text-sm">Clear filters</button>
    </div>

    <!-- Fish grid -->
    <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <FishCard v-for="f in filteredFish" :key="f.id" :fish="f" />
    </div>

    <!-- FAB — desktop only -->
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { user } from '../composables/useAuth'
import FishCard from '../components/FishCard.vue'

const fish = ref([])
const loading = ref(true)
const search = ref('')
const selectedYear = ref('')
const sortBy = ref('date_desc')
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

onUnmounted(() => { if (unsubscribe) unsubscribe() })

const availableYears = computed(() => {
  const years = fish.value
    .map((f) => f.date ? new Date(f.date).getFullYear() : null)
    .filter(Boolean)
  return [...new Set(years)].sort((a, b) => b - a)
})

const filteredFish = computed(() => {
  let result = [...fish.value]

  // Search
  if (search.value.trim()) {
    const q = search.value.trim().toLowerCase()
    result = result.filter((f) =>
      (f.name || '').toLowerCase().includes(q) ||
      (f.species || '').toLowerCase().includes(q) ||
      (f.location || '').toLowerCase().includes(q)
    )
  }

  // Year filter
  if (selectedYear.value) {
    result = result.filter((f) =>
      f.date && new Date(f.date).getFullYear() === Number(selectedYear.value)
    )
  }

  // Sort
  switch (sortBy.value) {
    case 'date_asc':
      result.sort((a, b) => (a.date || '').localeCompare(b.date || ''))
      break
    case 'weight_desc':
      result.sort((a, b) => (b.weight || 0) - (a.weight || 0))
      break
    case 'length_desc':
      result.sort((a, b) => (b.length || 0) - (a.length || 0))
      break
    case 'name_asc':
      result.sort((a, b) => (a.name || '').localeCompare(b.name || ''))
      break
    // date_desc is the default from Firestore, no re-sort needed
  }

  return result
})

function clearFilters() {
  search.value = ''
  selectedYear.value = ''
  sortBy.value = 'date_desc'
}
</script>
