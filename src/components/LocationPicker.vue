<template>
  <div>
    <div class="flex items-center justify-between mb-2">
      <label class="block text-sm font-medium text-slate-700">Pin Location</label>
      <div class="flex gap-2">
        <button
          type="button"
          @click="locateMe"
          :disabled="locating"
          class="text-xs text-ocean-600 font-medium flex items-center gap-1 disabled:opacity-50"
        >
          <span>{{ locating ? 'Locating…' : '📍 Use my location' }}</span>
        </button>
        <button
          v-if="modelValue"
          type="button"
          @click="clearPin"
          class="text-xs text-slate-400 hover:text-red-500"
        >
          Clear
        </button>
      </div>
    </div>
    <div ref="mapEl" class="w-full h-52 rounded-xl overflow-hidden border border-slate-200 z-0" />
    <p class="text-xs text-slate-400 mt-1">
      <template v-if="modelValue">📍 {{ modelValue.lat.toFixed(5) }}, {{ modelValue.lng.toFixed(5) }}</template>
      <template v-else>Tap the map to drop a pin</template>
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix Leaflet default marker icons in Vite
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const props = defineProps({
  modelValue: { type: Object, default: null }, // { lat, lng }
})
const emit = defineEmits(['update:modelValue'])

const mapEl = ref(null)
const locating = ref(false)
let map = null
let marker = null

onMounted(() => {
  const center = props.modelValue
    ? [props.modelValue.lat, props.modelValue.lng]
    : [51.505, -0.09] // default: London

  map = L.map(mapEl.value, { zoomControl: true }).setView(center, props.modelValue ? 13 : 4)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
  }).addTo(map)

  if (props.modelValue) {
    marker = L.marker(center).addTo(map)
  }

  map.on('click', (e) => {
    const { lat, lng } = e.latlng
    placeMarker(lat, lng)
  })
})

onUnmounted(() => {
  if (map) map.remove()
})

watch(() => props.modelValue, (val) => {
  if (!map) return
  if (val) {
    placeMarker(val.lat, val.lng, false)
  } else {
    if (marker) { marker.remove(); marker = null }
  }
})

function placeMarker(lat, lng, emit_ = true) {
  if (marker) {
    marker.setLatLng([lat, lng])
  } else {
    marker = L.marker([lat, lng]).addTo(map)
  }
  if (emit_) emit('update:modelValue', { lat, lng })
}

function clearPin() {
  if (marker) { marker.remove(); marker = null }
  emit('update:modelValue', null)
}

async function locateMe() {
  if (!navigator.geolocation) return
  locating.value = true
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      placeMarker(coords.latitude, coords.longitude)
      map.setView([coords.latitude, coords.longitude], 13)
      locating.value = false
    },
    () => { locating.value = false },
  )
}
</script>
