<template>
  <div class="max-w-xl mx-auto px-4 py-8">
    <!-- Loading -->
    <div v-if="loading" class="flex justify-center py-20">
      <div class="text-4xl animate-bounce">🎣</div>
    </div>

    <div v-else-if="!comp" class="text-center py-20">
      <div class="text-5xl mb-4">🤔</div>
      <p class="text-slate-500">Competition not found.</p>
    </div>

    <template v-else>
      <div class="flex items-center gap-3 mb-8">
        <router-link :to="`/competitions/${compId}`" class="text-ocean-600 hover:text-ocean-800 transition-colors">← Back</router-link>
        <h1 class="text-2xl font-bold text-slate-800">Submit a catch</h1>
      </div>

      <p class="text-sm text-slate-500 mb-6">
        Choose a catch to submit to <strong>{{ comp.title }}</strong>. Only eligible catches are shown.
      </p>

      <!-- Loading catches -->
      <div v-if="catchesLoading" class="flex justify-center py-16">
        <div class="text-3xl animate-bounce">🎣</div>
      </div>

      <template v-else>
        <!-- Eligible catches -->
        <div v-if="eligible.length === 0 && ineligible.length === 0" class="text-center py-12">
          <div class="text-5xl mb-3">🐟</div>
          <p class="text-slate-700 font-semibold mb-1">No catches found</p>
          <p class="text-slate-400 text-sm">Log a catch first, then come back to submit it.</p>
        </div>

        <div v-else>
          <div v-if="eligible.length > 0" class="space-y-3 mb-8">
            <h2 class="text-sm font-semibold text-green-700 uppercase tracking-wide">Eligible ({{ eligible.length }})</h2>
            <div
              v-for="c in eligible"
              :key="c.id"
              class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <div class="flex gap-3 p-4">
                <div v-if="c.photoUrl" class="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                  <img :src="c.photoUrl" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-slate-800 truncate">{{ c.name }}</p>
                  <p class="text-xs text-slate-500">{{ c.species }}</p>
                  <div class="flex items-center gap-3 mt-1 text-xs text-slate-400">
                    <span v-if="c.weight">{{ c.weight }} kg</span>
                    <span v-if="c.length">{{ c.length }} cm</span>
                    <span v-if="c.date">{{ c.date }}</span>
                  </div>
                </div>
                <div class="flex-shrink-0">
                  <button
                    v-if="!alreadySubmitted(c.id)"
                    @click="submitCatch(c)"
                    :disabled="submitting === c.id"
                    class="text-sm bg-ocean-600 hover:bg-ocean-700 disabled:bg-ocean-300 text-white px-4 py-2 rounded-xl transition-colors"
                  >
                    {{ submitting === c.id ? 'Submitting…' : 'Submit' }}
                  </button>
                  <span v-else class="text-xs text-green-600 font-medium">Submitted</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Ineligible catches -->
          <div v-if="ineligible.length > 0" class="space-y-3">
            <h2 class="text-sm font-semibold text-slate-400 uppercase tracking-wide">Ineligible ({{ ineligible.length }})</h2>
            <div
              v-for="c in ineligible"
              :key="c.id"
              class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden opacity-50"
            >
              <div class="flex gap-3 p-4">
                <div v-if="c.photoUrl" class="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                  <img :src="c.photoUrl" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-slate-800 truncate">{{ c.name }}</p>
                  <p class="text-xs text-slate-500">{{ c.species }}</p>
                  <p class="text-xs text-red-400 mt-1">{{ c.reason }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </template>

    <!-- Toast -->
    <Teleport to="body">
      <div
        v-if="toast.show"
        :class="toast.type === 'error' ? 'bg-red-500' : 'bg-green-500'"
        class="fixed top-4 left-1/2 -translate-x-1/2 z-50 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-lg"
      >
        {{ toast.message }}
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import {
  doc, getDoc, collection, query, where, getDocs, addDoc, serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'
import { user } from '../composables/useAuth'

const route = useRoute()
const compId = computed(() => route.params.id)
const comp = ref(null)
const loading = ref(true)
const myCatches = ref([])
const catchesLoading = ref(true)
const submittedIds = ref(new Set())
const submitting = ref(null)
const toast = ref({ show: false, message: '', type: 'success' })

function showToast(message, type = 'success') {
  toast.value = { show: true, message, type }
  setTimeout(() => { toast.value.show = false }, 3000)
}

onMounted(async () => {
  // Load competition
  const snap = await getDoc(doc(db, 'competitions', compId.value))
  if (snap.exists()) {
    comp.value = { id: snap.id, ...snap.data() }
  }
  loading.value = false

  if (!comp.value) return

  // Load user's catches
  const uid = user.value.uid
  const catchSnap = await getDocs(collection(db, `users/${uid}/fish`))
  myCatches.value = catchSnap.docs.map(d => ({ id: d.id, ...d.data() }))

  // Load already-submitted entry fishDocIds
  const entrySnap = await getDocs(
    query(
      collection(db, `competitions/${compId.value}/entries`),
      where('userId', '==', uid)
    )
  )
  submittedIds.value = new Set(entrySnap.docs.map(d => d.data().fishDocId))

  catchesLoading.value = false
})

function checkEligibility(c) {
  const reasons = []
  const cmp = comp.value

  // Species check
  if (cmp.allowedSpecies && cmp.allowedSpecies.length > 0) {
    if (!cmp.allowedSpecies.includes(c.catalogId)) {
      reasons.push('Species not allowed')
    }
  }

  // Date range check
  if (c.date) {
    if (c.date < cmp.startDate || c.date > cmp.endDate) {
      reasons.push('Caught outside date range')
    }
  } else {
    reasons.push('No date recorded')
  }

  // Required fields
  if (cmp.requirePhoto && !c.photoUrl) reasons.push('Missing photo')
  if (cmp.requireLength && !c.length) reasons.push('Missing length')
  if (cmp.requireWeight && !c.weight) reasons.push('Missing weight')

  return reasons
}

const eligible = computed(() => {
  return myCatches.value
    .filter(c => checkEligibility(c).length === 0)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
})

const ineligible = computed(() => {
  return myCatches.value
    .filter(c => {
      const reasons = checkEligibility(c)
      if (reasons.length > 0) {
        c.reason = reasons.join(', ')
        return true
      }
      return false
    })
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
})

function alreadySubmitted(fishId) {
  return submittedIds.value.has(fishId)
}

async function submitCatch(c) {
  if (submitting.value) return
  submitting.value = c.id
  try {
    await addDoc(collection(db, `competitions/${compId.value}/entries`), {
      userId: user.value.uid,
      fishDocId: c.id,
      catchName: c.name || '',
      species: c.species || '',
      catalogId: c.catalogId || '',
      length: c.length || null,
      weight: c.weight || null,
      photoUrl: c.photoUrl || '',
      date: c.date || '',
      location: c.location || '',
      userDisplayName: user.value.displayName,
      userPhotoURL: user.value.photoURL || '',
      status: 'pending',
      createdAt: serverTimestamp(),
    })
    submittedIds.value.add(c.id)
    showToast('Catch submitted! Waiting for approval.')
  } catch (e) {
    console.error(e)
    showToast('Failed to submit catch.', 'error')
  } finally {
    submitting.value = null
  }
}
</script>
