<template>
  <router-link
    :to="`/competitions/${competition.id}`"
    class="block bg-white rounded-2xl shadow-sm border border-slate-100 p-5 hover:border-ocean-200 transition-colors"
  >
    <div class="flex items-start justify-between gap-2">
      <div class="min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <h3 class="font-bold text-slate-800 truncate">{{ competition.title }}</h3>
          <span :class="statusInfo.color" class="text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap">
            {{ statusInfo.label }}
          </span>
        </div>
        <p v-if="competition.description" class="text-sm text-slate-500 line-clamp-1">{{ competition.description }}</p>
        <div class="flex items-center gap-3 mt-2 text-xs text-slate-400">
          <span>{{ formatDate(competition.startDate) }} – {{ formatDate(competition.endDate) }}</span>
          <span>{{ competition.memberIds?.length || 0 }} participants</span>
        </div>
      </div>
      <div class="text-right flex-shrink-0">
        <div class="text-xs text-slate-400 capitalize">{{ rankLabel }}</div>
        <div v-if="competition.adminIds?.includes(currentUid)" class="text-xs text-ocean-600 font-medium mt-0.5">Admin</div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { getCompetitionStatus } from '../utils/competitionStatus'

const props = defineProps({
  competition: { type: Object, required: true },
  currentUid: { type: String, default: '' },
})

const statusInfo = computed(() => getCompetitionStatus(props.competition.startDate, props.competition.endDate))

const rankLabel = computed(() => {
  const r = props.competition.rankBy
  if (r === 'weight') return 'By weight'
  if (r === 'length') return 'By length'
  return 'By count'
})

function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
}
</script>
