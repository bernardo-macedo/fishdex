<template>
  <div v-if="authReady">
    <Navbar v-if="user" />
    <main :class="user ? 'pb-20 sm:pb-0' : ''">
      <router-view />
    </main>
  </div>
  <div v-else class="min-h-screen flex items-center justify-center bg-ocean-900">
    <div class="text-white text-xl animate-pulse">🎣 Loading Fishdex...</div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { user, authReady } from './composables/useAuth'
import Navbar from './components/Navbar.vue'

let unsubscribe = null

onMounted(() => {
  unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
    user.value = firebaseUser
    authReady.value = true
  })
})

onUnmounted(() => {
  if (unsubscribe) unsubscribe()
})
</script>
