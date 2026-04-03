<template>
  <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
    <div class="flex gap-3 p-4">
      <!-- Photo thumbnail -->
      <div v-if="entry.photoUrl" class="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
        <img :src="entry.photoUrl" class="w-full h-full object-cover" />
      </div>

      <!-- Info -->
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-0.5">
          <router-link :to="`/profile/${entry.userId}`" class="text-sm font-medium text-slate-800 hover:text-ocean-600 truncate">
            {{ entry.userDisplayName }}
          </router-link>
          <span :class="statusClass" class="text-xs font-medium px-2 py-0.5 rounded-full">
            {{ entry.status }}
          </span>
        </div>
        <p class="text-sm text-slate-700 truncate">{{ entry.catchName }}</p>
        <div class="flex items-center gap-3 mt-1 text-xs text-slate-400">
          <span v-if="entry.species">{{ entry.species }}</span>
          <span v-if="entry.weight">{{ entry.weight }} kg</span>
          <span v-if="entry.length">{{ entry.length }} cm</span>
          <span v-if="entry.date">{{ entry.date }}</span>
        </div>
      </div>

      <!-- Admin actions -->
      <div v-if="showActions && entry.status === 'pending'" class="flex flex-col gap-1 flex-shrink-0">
        <button
          @click="$emit('approve', entry)"
          class="text-xs bg-green-50 hover:bg-green-100 text-green-700 px-3 py-1.5 rounded-lg transition-colors font-medium"
        >
          Approve
        </button>
        <button
          @click="$emit('reject', entry)"
          class="text-xs bg-red-50 hover:bg-red-100 text-red-500 px-3 py-1.5 rounded-lg transition-colors font-medium"
        >
          Reject
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  entry: { type: Object, required: true },
  showActions: { type: Boolean, default: false },
})

defineEmits(['approve', 'reject'])

const statusClass = computed(() => {
  switch (props.entry.status) {
    case 'approved': return 'bg-green-100 text-green-700'
    case 'rejected': return 'bg-red-100 text-red-500'
    default: return 'bg-amber-100 text-amber-700'
  }
})
</script>
