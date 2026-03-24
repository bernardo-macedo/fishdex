<template>
  <div ref="mapEl" class="w-full h-72 rounded-xl overflow-hidden border border-slate-200 z-0" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const props = defineProps({
  catches: { type: Array, required: true },
})

const mapEl = ref(null)
let map = null

onMounted(() => {
  map = L.map(mapEl.value, { zoomControl: true })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
  }).addTo(map)

  const bounds = []

  for (const c of props.catches) {
    const { lat, lng } = c.coords
    const marker = L.marker([lat, lng]).addTo(map)
    marker.bindPopup(`
      <div style="min-width:140px">
        <strong>${c.name}</strong><br/>
        <span style="color:#64748b;font-size:12px">${c.species || ''}</span><br/>
        ${c.date ? `<span style="font-size:11px;color:#94a3b8">${c.date}</span>` : ''}
        ${c.location ? `<br/><span style="font-size:11px">📍 ${c.location}</span>` : ''}
      </div>
    `)
    bounds.push([lat, lng])
  }

  if (bounds.length === 1) {
    map.setView(bounds[0], 12)
  } else if (bounds.length > 1) {
    map.fitBounds(bounds, { padding: [30, 30] })
  }
})

onUnmounted(() => {
  if (map) map.remove()
})
</script>
