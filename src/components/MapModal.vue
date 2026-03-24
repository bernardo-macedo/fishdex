<template>
  <Teleport to="body">
    <Transition name="slide-up">
      <div v-if="show" class="fixed inset-0 z-50 flex flex-col">
        <!-- Backdrop -->
        <div class="flex-1 bg-black/40" @click="$emit('close')" />

        <!-- Sheet -->
        <div class="bg-white rounded-t-2xl shadow-xl" style="height: 60vh">
          <div class="flex items-center justify-between px-4 py-3 border-b border-slate-100">
            <div>
              <p class="font-semibold text-slate-800 text-sm">{{ title }}</p>
              <p v-if="subtitle" class="text-xs text-slate-400">{{ subtitle }}</p>
            </div>
            <button @click="$emit('close')" class="text-slate-400 hover:text-slate-600 text-xl leading-none">✕</button>
          </div>
          <div ref="mapEl" class="w-full" style="height: calc(60vh - 57px)" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const props = defineProps({
  show: Boolean,
  coords: { type: Object, default: null }, // { lat, lng }
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
})
defineEmits(['close'])

const mapEl = ref(null)
let map = null

watch(() => props.show, async (val) => {
  if (val) {
    await nextTick()
    if (map) { map.remove(); map = null }
    map = L.map(mapEl.value).setView([props.coords.lat, props.coords.lng], 13)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map)
    L.marker([props.coords.lat, props.coords.lng]).addTo(map)
  } else {
    if (map) { map.remove(); map = null }
  }
})
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
