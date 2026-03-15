<template>
  <div class="max-w-2xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-slate-800 mb-8">My Stats</h1>

    <div v-if="loading" class="flex justify-center py-20">
      <div class="text-4xl animate-bounce">🎣</div>
    </div>

    <div v-else-if="catches.length === 0" class="text-center py-20">
      <div class="text-6xl mb-4">📊</div>
      <p class="text-slate-500">No catches yet — go fish!</p>
    </div>

    <div v-else class="space-y-8">

      <!-- Summary cards -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="bg-white rounded-2xl shadow-sm p-4 text-center">
          <div class="text-3xl font-bold text-ocean-600">{{ catches.length }}</div>
          <div class="text-xs text-slate-500 mt-1 font-medium uppercase tracking-wide">Total catches</div>
        </div>
        <div class="bg-white rounded-2xl shadow-sm p-4 text-center">
          <div class="text-3xl font-bold text-ocean-600">{{ uniqueSpecies }}</div>
          <div class="text-xs text-slate-500 mt-1 font-medium uppercase tracking-wide">Species</div>
        </div>
        <div class="bg-white rounded-2xl shadow-sm p-4 text-center">
          <div class="text-3xl font-bold text-ocean-600">{{ biggestWeight }}</div>
          <div class="text-xs text-slate-500 mt-1 font-medium uppercase tracking-wide">Heaviest (kg)</div>
        </div>
        <div class="bg-white rounded-2xl shadow-sm p-4 text-center">
          <div class="text-3xl font-bold text-ocean-600">{{ longestLength }}</div>
          <div class="text-xs text-slate-500 mt-1 font-medium uppercase tracking-wide">Longest (cm)</div>
        </div>
      </div>

      <!-- Catches by month -->
      <div class="bg-white rounded-2xl shadow-sm p-6">
        <h2 class="text-lg font-bold text-slate-700 mb-4">Catches by month</h2>
        <div v-if="catchesByMonth.length === 0" class="text-slate-400 text-sm">No dated catches yet.</div>
        <div v-else class="space-y-2">
          <div
            v-for="row in catchesByMonth"
            :key="row.label"
            class="flex items-center gap-3"
          >
            <div class="w-24 text-xs text-slate-500 text-right flex-shrink-0">{{ row.label }}</div>
            <div class="flex-1 bg-slate-100 rounded-full h-5 overflow-hidden">
              <div
                class="h-full bg-ocean-500 rounded-full transition-all"
                :style="{ width: (row.count / maxMonthCount * 100) + '%' }"
              />
            </div>
            <div class="w-6 text-xs font-semibold text-slate-600 flex-shrink-0">{{ row.count }}</div>
          </div>
        </div>
      </div>

      <!-- Personal bests per species -->
      <div class="bg-white rounded-2xl shadow-sm p-6">
        <h2 class="text-lg font-bold text-slate-700 mb-4">Personal bests</h2>
        <div class="divide-y divide-slate-100">
          <div
            v-for="pb in personalBests"
            :key="pb.species"
            class="flex items-center justify-between py-3"
          >
            <div>
              <div class="font-medium text-slate-800">{{ pb.name }}</div>
              <div class="text-xs text-ocean-500">{{ pb.species }}</div>
            </div>
            <div class="flex gap-4 text-right">
              <div v-if="pb.weight" class="text-sm">
                <div class="font-bold text-ocean-700">{{ pb.weight }} kg</div>
                <div class="text-xs text-slate-400">heaviest</div>
              </div>
              <div v-if="pb.length" class="text-sm">
                <div class="font-bold text-ocean-700">{{ pb.length }} cm</div>
                <div class="text-xs text-slate-400">longest</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Most caught species -->
      <div class="bg-white rounded-2xl shadow-sm p-6">
        <h2 class="text-lg font-bold text-slate-700 mb-4">Most caught species</h2>
        <div class="space-y-2">
          <div
            v-for="(row, i) in topSpecies"
            :key="row.label"
            class="flex items-center gap-3"
          >
            <div class="w-5 text-xs font-bold text-slate-400 text-right flex-shrink-0">{{ i + 1 }}</div>
            <div class="flex-1 text-sm text-slate-700 font-medium">{{ row.label }}</div>
            <div class="flex-1 bg-slate-100 rounded-full h-4 overflow-hidden">
              <div
                class="h-full bg-ocean-400 rounded-full"
                :style="{ width: (row.count / topSpecies[0].count * 100) + '%' }"
              />
            </div>
            <div class="w-6 text-xs font-semibold text-slate-600 flex-shrink-0">{{ row.count }}</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { user } from '../composables/useAuth'

const catches = ref([])
const loading = ref(true)
let unsubscribe = null

onMounted(() => {
  const q = query(
    collection(db, `users/${user.value.uid}/fish`),
    orderBy('createdAt', 'desc')
  )
  unsubscribe = onSnapshot(q, (snap) => {
    catches.value = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
    loading.value = false
  }, () => { loading.value = false })
})

onUnmounted(() => { if (unsubscribe) unsubscribe() })

const uniqueSpecies = computed(() => {
  const species = catches.value.map((c) => c.catalogId || c.species).filter(Boolean)
  return new Set(species).size
})

const biggestWeight = computed(() => {
  const weights = catches.value.map((c) => c.weight).filter(Boolean)
  return weights.length ? Math.max(...weights) : '—'
})

const longestLength = computed(() => {
  const lengths = catches.value.map((c) => c.length).filter(Boolean)
  return lengths.length ? Math.max(...lengths) : '—'
})

const catchesByMonth = computed(() => {
  const counts = {}
  for (const c of catches.value) {
    if (!c.date) continue
    const d = new Date(c.date)
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
    const label = d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
    if (!counts[key]) counts[key] = { label, count: 0 }
    counts[key].count++
  }
  return Object.entries(counts)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, v]) => v)
    .slice(-12)
})

const maxMonthCount = computed(() => {
  return Math.max(1, ...catchesByMonth.value.map((r) => r.count))
})

const personalBests = computed(() => {
  const bests = {}
  for (const c of catches.value) {
    const key = c.catalogId || c.species || c.name
    if (!key) continue
    if (!bests[key]) {
      bests[key] = { name: c.name, species: c.species || key, weight: null, length: null }
    }
    if (c.weight && (!bests[key].weight || c.weight > bests[key].weight)) {
      bests[key].weight = c.weight
    }
    if (c.length && (!bests[key].length || c.length > bests[key].length)) {
      bests[key].length = c.length
    }
  }
  return Object.values(bests).filter((b) => b.weight || b.length)
})

const topSpecies = computed(() => {
  const counts = {}
  for (const c of catches.value) {
    const key = c.species || c.name || 'Unknown'
    counts[key] = (counts[key] || 0) + 1
  }
  return Object.entries(counts)
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8)
})
</script>
