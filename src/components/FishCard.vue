<template>
  <router-link
    :to="`/fish/${fish.id}`"
    class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer block"
  >
    <div class="aspect-square bg-ocean-100 overflow-hidden">
      <img
        v-if="fish.photoUrl"
        :src="fish.photoUrl"
        :alt="fish.name"
        class="w-full h-full object-cover"
      />
      <div v-else class="w-full h-full flex items-center justify-center text-6xl">
        🐟
      </div>
    </div>

    <div class="p-4">
      <h3 class="font-bold text-slate-800 text-lg leading-tight">{{ fish.name }}</h3>
      <p v-if="fish.species" class="text-ocean-600 text-sm">{{ fish.species }}</p>

      <div class="mt-3 flex flex-wrap gap-2">
        <span v-if="fish.length" class="inline-flex items-center gap-1 bg-ocean-50 text-ocean-700 text-xs px-2 py-1 rounded-full">
          📏 {{ fish.length }} cm
        </span>
        <span v-if="fish.weight" class="inline-flex items-center gap-1 bg-ocean-50 text-ocean-700 text-xs px-2 py-1 rounded-full">
          ⚖️ {{ fish.weight }} kg
        </span>
        <span v-if="fish.location" class="inline-flex items-center gap-1 bg-ocean-50 text-ocean-700 text-xs px-2 py-1 rounded-full">
          📍 {{ fish.location }}
        </span>
      </div>

      <p class="text-slate-400 text-xs mt-2">{{ formatDate(fish.date) }}</p>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps({
  fish: {
    type: Object,
    required: true,
  },
})

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  })
}
</script>
