<template>
  <div>
    <label class="block text-sm font-medium text-slate-700 mb-1">{{ label }}</label>
    <button
      type="button"
      @click="open = !open"
      class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-left text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400 bg-white"
    >
      <span v-if="modelValue.length === 0" class="text-slate-400">All species allowed</span>
      <span v-else class="text-slate-800">{{ modelValue.length }} species selected</span>
      <span class="float-right text-slate-400">{{ open ? '▴' : '▾' }}</span>
    </button>

    <div v-if="open" class="mt-2 border border-slate-200 rounded-xl bg-white max-h-56 overflow-y-auto p-3 space-y-3">
      <!-- Search -->
      <input
        v-model="search"
        type="text"
        placeholder="Search species…"
        class="w-full border border-slate-100 rounded-lg px-3 py-1.5 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-400"
      />

      <div v-for="group in filteredGroups" :key="group.label" class="space-y-1">
        <p class="text-xs font-semibold text-slate-400 uppercase tracking-wide">{{ group.label }}</p>
        <label
          v-for="fish in group.items"
          :key="fish.id"
          class="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-slate-50 cursor-pointer"
        >
          <input
            type="checkbox"
            :checked="modelValue.includes(fish.id)"
            @change="toggle(fish.id)"
            class="rounded border-slate-300 text-ocean-600 focus:ring-ocean-400"
          />
          <span class="text-sm text-slate-700">{{ fish.emoji }} {{ fish.name }}</span>
        </label>
      </div>

      <p v-if="filteredGroups.length === 0" class="text-xs text-slate-400 text-center py-2">No species found</p>
    </div>

    <p v-if="modelValue.length > 0" class="text-xs text-slate-500 mt-1">
      {{ modelValue.map(id => catalogMap[id]?.name).filter(Boolean).join(', ') }}
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { fishCatalog } from '../data/fishCatalog'

const props = defineProps({
  modelValue: { type: Array, default: () => [] },
  label: { type: String, default: 'Allowed species' },
})
const emit = defineEmits(['update:modelValue'])

const open = ref(false)
const search = ref('')

const catalogMap = Object.fromEntries(fishCatalog.map(f => [f.id, f]))

const groups = [
  { label: 'Freshwater', items: fishCatalog.filter(f => f.habitat === 'Freshwater') },
  { label: 'Saltwater', items: fishCatalog.filter(f => f.habitat === 'Saltwater') },
  { label: 'Both', items: fishCatalog.filter(f => f.habitat === 'Both') },
]

const filteredGroups = computed(() => {
  const q = search.value.toLowerCase()
  if (!q) return groups
  return groups
    .map(g => ({ ...g, items: g.items.filter(f => f.name.toLowerCase().includes(q)) }))
    .filter(g => g.items.length > 0)
})

function toggle(id) {
  const current = [...props.modelValue]
  const idx = current.indexOf(id)
  if (idx >= 0) current.splice(idx, 1)
  else current.push(id)
  emit('update:modelValue', current)
}
</script>
