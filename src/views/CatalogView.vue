<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <!-- Header -->
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-slate-800">Fish Catalog</h1>
      <p class="text-slate-500 mt-1">
        <span class="text-ocean-600 font-semibold">{{ caughtIds.size }}</span> of
        {{ fishCatalog.length }} species caught
      </p>
    </div>

    <!-- Progress bar -->
    <div class="w-full bg-slate-200 rounded-full h-2.5 mb-6">
      <div
        class="bg-ocean-500 h-2.5 rounded-full transition-all duration-500"
        :style="{ width: `${(caughtIds.size / fishCatalog.length) * 100}%` }"
      />
    </div>

    <!-- Filters -->
    <div class="flex gap-2 mb-6">
      <button
        v-for="f in filters"
        :key="f.value"
        @click="activeFilter = f.value"
        :class="[
          'px-4 py-1.5 rounded-full text-sm font-medium transition-colors',
          activeFilter === f.value
            ? 'bg-ocean-600 text-white'
            : 'bg-white text-slate-600 border border-slate-200 hover:border-ocean-400',
        ]"
      >
        {{ f.label }}
      </button>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <router-link
        v-for="fish in filteredFish"
        :key="fish.id"
        :to="`/catalog/${fish.id}`"
        class="group relative bg-white rounded-2xl shadow-sm overflow-hidden border border-transparent hover:border-ocean-300 hover:shadow-md transition-all duration-200"
        :class="{ 'opacity-50 grayscale': !caughtIds.has(fish.id) }"
      >
        <!-- Caught badge -->
        <div
          v-if="caughtIds.has(fish.id)"
          class="absolute top-2 right-2 z-10 bg-ocean-500 text-white text-xs px-2 py-0.5 rounded-full font-medium shadow"
        >
          ✓ Caught
        </div>

        <!-- Image -->
        <div class="aspect-square bg-ocean-50 overflow-hidden relative">
          <div class="absolute inset-0 flex items-center justify-center text-5xl">{{ fish.emoji }}</div>
          <img
            v-if="fish.image"
            :src="fish.image"
            :alt="fish.name"
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            @error="(e) => e.target.style.display = 'none'"
          />
        </div>

        <!-- Info -->
        <div class="p-3">
          <p class="font-semibold text-slate-800 text-sm leading-tight">{{ fish.name }}</p>
          <p class="text-xs text-slate-400 italic mt-0.5 truncate">{{ fish.species }}</p>
          <span class="inline-block mt-1.5 text-xs px-2 py-0.5 rounded-full"
            :class="{
              'bg-blue-100 text-blue-700': fish.habitat === 'Freshwater',
              'bg-cyan-100 text-cyan-700': fish.habitat === 'Saltwater',
              'bg-teal-100 text-teal-700': fish.habitat === 'Freshwater & Saltwater',
            }"
          >
            {{ fish.habitat }}
          </span>
        </div>
      </router-link>
    </div>

    <p v-if="filteredFish.length === 0" class="text-center text-slate-400 py-16">
      No fish in this filter yet.
    </p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { user } from '../composables/useAuth'
import { fishCatalog } from '../data/fishCatalog'

const caughtIds = ref(new Set())
let unsubscribe = null

const filters = [
  { label: 'All', value: 'all' },
  { label: '✓ Caught', value: 'caught' },
  { label: '🎯 Not yet', value: 'not-caught' },
]
const activeFilter = ref('all')

onMounted(() => {
  if (!user.value) return
  unsubscribe = onSnapshot(
    collection(db, `users/${user.value.uid}/fish`),
    (snapshot) => {
      const ids = new Set()
      snapshot.docs.forEach((doc) => {
        const data = doc.data()
        // 1. Direct catalogId match (most reliable — set by the picker)
        if (data.catalogId) {
          ids.add(data.catalogId)
          return
        }
        // 2. Fallback: fuzzy name/species match for older entries
        const speciesLower = (data.species || '').toLowerCase()
        const nameLower = (data.name || '').toLowerCase()
        fishCatalog.forEach((catalogFish) => {
          if (
            speciesLower === catalogFish.species.toLowerCase() ||
            nameLower === catalogFish.name.toLowerCase()
          ) {
            ids.add(catalogFish.id)
          }
        })
      })
      caughtIds.value = ids
    }
  )
})

onUnmounted(() => {
  if (unsubscribe) unsubscribe()
})

const filteredFish = computed(() => {
  if (activeFilter.value === 'caught') return fishCatalog.filter((f) => caughtIds.value.has(f.id))
  if (activeFilter.value === 'not-caught') return fishCatalog.filter((f) => !caughtIds.value.has(f.id))
  return fishCatalog
})
</script>
