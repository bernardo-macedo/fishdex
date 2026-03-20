<template>
  <Transition name="slide-up">
    <div
      v-if="show"
      class="fixed bottom-20 left-4 right-4 z-50 bg-ocean-600 text-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
    >
      <div class="text-3xl">🎣</div>
      <div class="flex-1 min-w-0">
        <p class="font-semibold text-sm">Install Fishdex</p>
        <p class="text-xs text-ocean-100 mt-0.5">
          <template v-if="isIos">Tap <strong>Share</strong> then <strong>Add to Home Screen</strong></template>
          <template v-else>Add to your home screen for the full app experience</template>
        </p>
      </div>
      <div class="flex flex-col gap-1.5 shrink-0">
        <button
          v-if="!isIos"
          @click="install"
          class="bg-white text-ocean-600 text-xs font-semibold px-3 py-1.5 rounded-lg"
        >
          Install
        </button>
        <button @click="dismiss" class="text-ocean-200 text-xs px-3 py-1.5">
          Not now
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const show = ref(false)
const isIos = ref(false)
let deferredPrompt = null

onMounted(() => {
  // Don't show if already installed
  if (window.matchMedia('(display-mode: standalone)').matches) return
  // Don't show if dismissed recently
  if (localStorage.getItem('pwa-banner-dismissed')) return

  const ios = /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
  const isSafari = /safari/.test(navigator.userAgent.toLowerCase()) && !/chrome/.test(navigator.userAgent.toLowerCase())

  if (ios && isSafari) {
    isIos.value = true
    show.value = true
    return
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPrompt = e
    show.value = true
  })
})

async function install() {
  if (!deferredPrompt) return
  deferredPrompt.prompt()
  const { outcome } = await deferredPrompt.userChoice
  if (outcome === 'accepted') show.value = false
  deferredPrompt = null
}

function dismiss() {
  show.value = false
  localStorage.setItem('pwa-banner-dismissed', '1')
}
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
