<template>
  <!-- Top bar -->
  <nav class="bg-ocean-800 text-white shadow-lg">
    <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo + desktop links -->
      <div class="flex items-center gap-6">
        <router-link to="/" class="flex items-center gap-2 font-bold text-xl hover:text-ocean-200 transition-colors">
          🎣 Fishdex
        </router-link>
        <div class="hidden sm:flex items-center gap-5 text-sm font-medium">
          <router-link to="/" exact-active-class="text-white" class="text-ocean-300 hover:text-white transition-colors">
            My Catches
          </router-link>
          <router-link to="/catalog" active-class="text-white" class="text-ocean-300 hover:text-white transition-colors">
            Catalog
          </router-link>
          <router-link to="/feed" active-class="text-white" class="text-ocean-300 hover:text-white transition-colors">
            Feed
          </router-link>
          <router-link to="/stats" active-class="text-white" class="text-ocean-300 hover:text-white transition-colors">
            Stats
          </router-link>
        </div>
      </div>

      <!-- Right side -->
      <div class="flex items-center gap-3">
        <router-link
          to="/add"
          class="hidden sm:block bg-ocean-500 hover:bg-ocean-400 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
        >
          + Add catch
        </router-link>

        <img
          v-if="user?.photoURL"
          :src="user.photoURL"
          :alt="user.displayName"
          class="w-8 h-8 rounded-full border-2 border-ocean-400 flex-shrink-0"
        />

        <button
          @click="handleLogout"
          class="text-ocean-300 hover:text-white text-sm transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>

  <!-- Bottom tab bar — mobile only -->
  <div class="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 flex">
    <router-link
      to="/"
      exact-active-class="text-ocean-600 border-t-2 border-ocean-600 -mt-px"
      class="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-slate-400 hover:text-ocean-500 transition-colors"
    >
      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      <span class="text-xs font-medium">Catches</span>
    </router-link>

    <router-link
      to="/catalog"
      active-class="text-ocean-600 border-t-2 border-ocean-600 -mt-px"
      class="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-slate-400 hover:text-ocean-500 transition-colors"
    >
      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
      <span class="text-xs font-medium">Catalog</span>
    </router-link>

    <router-link
      to="/add"
      class="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-slate-400"
      active-class="text-ocean-600"
    >
      <div class="w-10 h-10 rounded-full bg-ocean-600 flex items-center justify-center -mt-5 shadow-lg border-4 border-white">
        <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <span class="text-xs font-medium">Add</span>
    </router-link>

    <router-link
      to="/feed"
      active-class="text-ocean-600 border-t-2 border-ocean-600 -mt-px"
      class="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-slate-400 hover:text-ocean-500 transition-colors"
    >
      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span class="text-xs font-medium">Feed</span>
    </router-link>

    <router-link
      to="/stats"
      active-class="text-ocean-600 border-t-2 border-ocean-600 -mt-px"
      class="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-slate-400 hover:text-ocean-500 transition-colors"
    >
      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
      <span class="text-xs font-medium">Stats</span>
    </router-link>
  </div>
</template>

<script setup>
import { signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { auth } from '../firebase'
import { user } from '../composables/useAuth'

const router = useRouter()

async function handleLogout() {
  await signOut(auth)
  router.push('/login')
}
</script>
