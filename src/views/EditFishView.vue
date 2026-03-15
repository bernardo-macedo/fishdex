<template>
  <!-- Toast -->
  <Teleport to="body">
    <div
      v-if="toast.show"
      :class="toast.type === 'error' ? 'bg-red-500' : 'bg-green-500'"
      class="fixed top-4 left-1/2 -translate-x-1/2 z-50 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-lg transition-all"
    >
      {{ toast.message }}
    </div>
  </Teleport>

  <div class="max-w-xl mx-auto px-4 py-8">
    <div class="flex items-center gap-3 mb-8">
      <router-link :to="`/fish/${route.params.id}`" class="text-ocean-600 hover:text-ocean-800 transition-colors">
        ← Back
      </router-link>
      <h1 class="text-2xl font-bold text-slate-800">Edit catch</h1>
    </div>

    <div v-if="loading" class="flex justify-center py-20">
      <div class="text-4xl animate-bounce">🎣</div>
    </div>

    <form v-else @submit.prevent="handleSubmit" class="space-y-5 bg-white rounded-2xl shadow-md p-6">

      <!-- Catalog species picker -->
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">
          Species <span class="text-red-400">*</span>
        </label>
        <div class="relative">
          <select
            v-model="selectedCatalogId"
            @change="onCatalogSelect"
            class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent appearance-none pr-10"
          >
            <option value="">— Select from catalog —</option>
            <optgroup label="Freshwater">
              <option v-for="fish in freshwaterFish" :key="fish.id" :value="fish.id">
                {{ fish.name }}
              </option>
            </optgroup>
            <optgroup label="Saltwater">
              <option v-for="fish in saltwaterFish" :key="fish.id" :value="fish.id">
                {{ fish.name }}
              </option>
            </optgroup>
            <optgroup label="Both">
              <option v-for="fish in bothFish" :key="fish.id" :value="fish.id">
                {{ fish.name }}
              </option>
            </optgroup>
          </select>
          <div class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">▾</div>
        </div>
        <p v-if="selectedCatalogId" class="text-xs text-ocean-600 mt-1 italic">
          {{ selectedSpeciesLabel }}
        </p>
      </div>

      <!-- Catch nickname -->
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">
          Catch name / nickname <span class="text-red-400">*</span>
        </label>
        <input
          v-model="form.name"
          type="text"
          required
          placeholder="e.g. Big pike from the river, or just Pike"
          class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent"
        />
      </div>

      <!-- Photo upload -->
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-2">Photo</label>
        <div
          class="relative border-2 border-dashed border-slate-300 rounded-xl overflow-hidden cursor-pointer hover:border-ocean-400 transition-colors"
          :class="photoPreview ? 'aspect-video' : 'h-40'"
          @click="photoInput.click()"
        >
          <img v-if="photoPreview" :src="photoPreview" class="w-full h-full object-cover" />
          <div v-else class="flex flex-col items-center justify-center h-full text-slate-400">
            <span class="text-4xl">📷</span>
            <span class="text-sm mt-2">Tap to change photo</span>
          </div>
          <input
            ref="photoInput"
            type="file"
            accept="image/*"
            class="hidden"
            @change="handlePhotoChange"
          />
        </div>
      </div>

      <!-- Size row -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">Length (cm)</label>
          <input
            v-model.number="form.length"
            type="number"
            min="0"
            step="0.1"
            placeholder="0.0"
            class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">Weight (kg)</label>
          <input
            v-model.number="form.weight"
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
            class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent"
          />
        </div>
      </div>

      <!-- Location -->
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">Location</label>
        <input
          v-model="form.location"
          type="text"
          placeholder="e.g. River Tagus, Lisbon"
          class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent"
        />
      </div>

      <!-- Date -->
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">Date caught</label>
        <input
          v-model="form.date"
          type="date"
          class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent"
        />
      </div>

      <!-- Notes -->
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">Notes</label>
        <textarea
          v-model="form.notes"
          rows="3"
          placeholder="Any story behind this catch?"
          class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent resize-none"
        />
      </div>

      <!-- Share to feed -->
      <div class="flex items-center justify-between bg-ocean-50 rounded-xl px-4 py-3">
        <div>
          <p class="text-sm font-medium text-slate-700">Share to community feed 🌍</p>
          <p class="text-xs text-slate-400 mt-0.5">Others will be able to see this catch</p>
        </div>
        <button
          type="button"
          @click="form.public = !form.public"
          :class="form.public ? 'bg-ocean-600' : 'bg-slate-200'"
          class="relative w-12 h-7 rounded-full transition-colors flex-shrink-0 overflow-hidden"
        >
          <span
            :class="form.public ? 'translate-x-6' : 'translate-x-1'"
            class="absolute top-1 left-0 w-5 h-5 bg-white rounded-full shadow transition-transform"
          />
        </button>
      </div>

      <!-- Submit -->
      <button
        type="submit"
        :disabled="saving"
        class="w-full bg-ocean-600 hover:bg-ocean-700 disabled:bg-ocean-300 text-white font-semibold py-3 rounded-xl transition-colors"
      >
        {{ saving ? 'Saving...' : 'Save changes' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { doc, getDoc, updateDoc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore'
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useRoute, useRouter } from 'vue-router'
import { db, storage } from '../firebase'
import { user } from '../composables/useAuth'
import { fishCatalog, getFishById } from '../data/fishCatalog'
import { compressImage } from '../utils/compressImage'

const route = useRoute()
const router = useRouter()
const photoInput = ref(null)
const photoPreview = ref(null)
const photoFile = ref(null)
const saving = ref(false)
const loading = ref(true)
const selectedCatalogId = ref('')
const originalPublic = ref(false)
const toast = ref({ show: false, message: '', type: 'success' })

function showToast(message, type = 'success') {
  toast.value = { show: true, message, type }
  setTimeout(() => { toast.value.show = false }, 3000)
}

const freshwaterFish = fishCatalog.filter((f) => f.habitat === 'Freshwater')
const saltwaterFish = fishCatalog.filter((f) => f.habitat === 'Saltwater')
const bothFish = fishCatalog.filter((f) => f.habitat === 'Freshwater & Saltwater')

const selectedSpeciesLabel = computed(() => {
  if (!selectedCatalogId.value) return ''
  const fish = getFishById(selectedCatalogId.value)
  return fish ? fish.species : ''
})

const form = ref({
  name: '',
  species: '',
  catalogId: '',
  length: null,
  weight: null,
  location: '',
  date: '',
  notes: '',
  public: false,
})

onMounted(async () => {
  try {
    const docRef = doc(db, `users/${user.value.uid}/fish/${route.params.id}`)
    const snap = await getDoc(docRef)
    if (snap.exists()) {
      const data = snap.data()
      form.value = {
        name: data.name || '',
        species: data.species || '',
        catalogId: data.catalogId || '',
        length: data.length || null,
        weight: data.weight || null,
        location: data.location || '',
        date: data.date || '',
        notes: data.notes || '',
        public: data.public || false,
      }
      selectedCatalogId.value = data.catalogId || ''
      originalPublic.value = data.public || false
      if (data.photoUrl) photoPreview.value = data.photoUrl
    }
  } finally {
    loading.value = false
  }
})

function onCatalogSelect() {
  const fish = getFishById(selectedCatalogId.value)
  if (fish) {
    form.value.species = fish.species
    form.value.catalogId = fish.id
  } else {
    form.value.species = ''
    form.value.catalogId = ''
  }
}

function handlePhotoChange(e) {
  const file = e.target.files[0]
  if (!file) return
  photoFile.value = file
  photoPreview.value = URL.createObjectURL(file)
}

async function handleSubmit() {
  if (!form.value.name.trim()) {
    showToast('Please enter a catch name.', 'error')
    return
  }
  saving.value = true

  try {
    let photoUrl = photoPreview.value || ''

    if (photoFile.value) {
      const compressed = await compressImage(photoFile.value)
      const fileRef = storageRef(
        storage,
        `users/${user.value.uid}/fish/${Date.now()}_${photoFile.value.name}`
      )
      await uploadBytes(fileRef, compressed)
      photoUrl = await getDownloadURL(fileRef)
    }

    const catchData = {
      name: form.value.name.trim(),
      species: form.value.species.trim(),
      catalogId: form.value.catalogId || null,
      length: form.value.length || null,
      weight: form.value.weight || null,
      location: form.value.location.trim(),
      date: form.value.date,
      notes: form.value.notes.trim(),
      photoUrl,
      public: form.value.public,
    }

    const privateRef = doc(db, `users/${user.value.uid}/fish/${route.params.id}`)
    await updateDoc(privateRef, catchData)

    const feedRef = doc(db, 'feed', route.params.id)
    if (form.value.public) {
      await setDoc(feedRef, {
        ...catchData,
        userId: user.value.uid,
        userDisplayName: user.value.displayName,
        userPhotoURL: user.value.photoURL || '',
        likesCount: 0,
        commentsCount: 0,
      }, { merge: true })
    } else if (originalPublic.value && !form.value.public) {
      try { await deleteDoc(feedRef) } catch {}
    }

    showToast('Changes saved!')
    setTimeout(() => router.push(`/fish/${route.params.id}`), 800)
  } catch (e) {
    console.error(e)
    showToast('Failed to save. Please try again.', 'error')
  } finally {
    saving.value = false
  }
}
</script>
