<template>
  <div>
    <div v-if="loading" class="flex justify-center py-16">
      <div class="text-3xl animate-bounce">🎣</div>
    </div>

    <div v-else-if="rows.length === 0" class="text-center py-12">
      <div class="text-5xl mb-3">🏆</div>
      <p class="text-slate-700 font-semibold mb-1">No entries yet</p>
      <p class="text-slate-400 text-sm">Be the first to submit a catch!</p>
    </div>

    <div v-else class="bg-white rounded-2xl shadow-sm divide-y divide-slate-100 overflow-hidden">
      <div
        v-for="(row, idx) in rows"
        :key="row.id || row.userId"
        class="flex items-center gap-3 p-4"
      >
        <!-- Rank -->
        <div class="w-8 text-center flex-shrink-0">
          <span v-if="idx === 0" class="text-2xl">🥇</span>
          <span v-else-if="idx === 1" class="text-2xl">🥈</span>
          <span v-else-if="idx === 2" class="text-2xl">🥉</span>
          <span v-else class="text-sm font-bold text-slate-400">#{{ idx + 1 }}</span>
        </div>

        <!-- User -->
        <router-link :to="`/profile/${row.userId}`" class="flex-shrink-0">
          <img v-if="row.userPhotoURL" :src="row.userPhotoURL" class="w-9 h-9 rounded-full border border-slate-100" />
          <div v-else class="w-9 h-9 rounded-full bg-ocean-100 flex items-center justify-center text-base">🎣</div>
        </router-link>

        <!-- Info -->
        <div class="flex-1 min-w-0">
          <router-link :to="`/profile/${row.userId}`" class="font-medium text-slate-800 hover:text-ocean-600 text-sm truncate block">
            {{ row.userDisplayName }}
          </router-link>
          <p class="text-xs text-slate-400 truncate">
            <template v-if="rankBy === 'count'">{{ row.value }} {{ row.value === 1 ? 'catch' : 'catches' }}</template>
            <template v-else>{{ row.catchName }} — {{ row.species }}</template>
          </p>
        </div>

        <!-- Value -->
        <div class="text-right flex-shrink-0">
          <template v-if="rankBy === 'weight'">
            <span class="font-bold text-slate-800">{{ row.value }}</span>
            <span class="text-xs text-slate-400 ml-0.5">kg</span>
          </template>
          <template v-else-if="rankBy === 'length'">
            <span class="font-bold text-slate-800">{{ row.value }}</span>
            <span class="text-xs text-slate-400 ml-0.5">cm</span>
          </template>
          <template v-else>
            <span class="font-bold text-slate-800">{{ row.value }}</span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'

const props = defineProps({
  competitionId: { type: String, required: true },
  rankBy: { type: String, default: 'weight' },
})

const entries = ref([])
const loading = ref(true)
let unsub = null

function startListener() {
  if (unsub) unsub()
  loading.value = true

  const baseQ = query(
    collection(db, `competitions/${props.competitionId}/entries`),
    where('status', '==', 'approved')
  )

  unsub = onSnapshot(baseQ, (snap) => {
    entries.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
    loading.value = false
  }, () => { loading.value = false })
}

onMounted(startListener)
onUnmounted(() => { if (unsub) unsub() })
watch(() => props.competitionId, startListener)

const rows = computed(() => {
  if (props.rankBy === 'count') {
    // Group by user, count entries
    const byUser = {}
    for (const e of entries.value) {
      if (!byUser[e.userId]) {
        byUser[e.userId] = {
          userId: e.userId,
          userDisplayName: e.userDisplayName,
          userPhotoURL: e.userPhotoURL,
          value: 0,
        }
      }
      byUser[e.userId].value++
    }
    return Object.values(byUser).sort((a, b) => b.value - a.value)
  }

  // Sort by weight or length (single best entry per user)
  const field = props.rankBy
  const byUser = {}
  for (const e of entries.value) {
    const val = e[field] || 0
    if (!byUser[e.userId] || val > byUser[e.userId].value) {
      byUser[e.userId] = {
        id: e.id,
        userId: e.userId,
        userDisplayName: e.userDisplayName,
        userPhotoURL: e.userPhotoURL,
        catchName: e.catchName,
        species: e.species,
        value: val,
      }
    }
  }
  return Object.values(byUser).sort((a, b) => b.value - a.value)
})
</script>
