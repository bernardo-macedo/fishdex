<template>
  <div class="max-w-2xl mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold text-slate-800 mb-6">Notifications</h1>

    <div v-if="loading" class="flex justify-center py-20">
      <div class="text-4xl animate-bounce">🔔</div>
    </div>

    <div v-else-if="notifications.length === 0" class="text-center py-20">
      <div class="text-5xl mb-4">🔔</div>
      <p class="text-slate-500">No notifications yet.</p>
    </div>

    <div v-else class="space-y-2">
      <div
        v-for="n in notifications"
        :key="n.id"
        class="bg-white rounded-2xl shadow-sm border p-4 flex items-start gap-3 transition-colors"
        :class="n.read ? 'border-slate-100' : 'border-ocean-200 bg-ocean-50'"
      >
        <router-link :to="`/profile/${n.fromUserId}`" class="flex-shrink-0">
          <img v-if="n.fromPhotoURL" :src="n.fromPhotoURL" class="w-10 h-10 rounded-full" />
          <div v-else class="w-10 h-10 rounded-full bg-ocean-100 flex items-center justify-center text-lg">🎣</div>
        </router-link>

        <div class="flex-1 min-w-0">
          <p class="text-sm text-slate-700 leading-snug">
            <router-link :to="`/profile/${n.fromUserId}`" class="font-semibold hover:text-ocean-600 transition-colors">{{ n.fromDisplayName }}</router-link>
            <template v-if="n.type === 'like'">
              &nbsp;liked your catch of
              <router-link :to="`/fish/${n.catchId}`" class="font-medium hover:text-ocean-600 transition-colors">{{ n.catchName }}</router-link>
            </template>
            <template v-else-if="n.type === 'comment'">
              &nbsp;commented on
              <router-link :to="`/fish/${n.catchId}`" class="font-medium hover:text-ocean-600 transition-colors">{{ n.catchName }}</router-link>:
              <span class="italic text-slate-500">"{{ n.text }}"</span>
            </template>
          </p>
          <p class="text-xs text-slate-400 mt-1">{{ timeAgo(n.createdAt) }}</p>
        </div>

        <div v-if="!n.read" class="w-2 h-2 rounded-full bg-ocean-500 mt-2 flex-shrink-0" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { collection, query, orderBy, onSnapshot, writeBatch } from 'firebase/firestore'
import { db } from '../firebase'
import { user } from '../composables/useAuth'

const notifications = ref([])
const loading = ref(true)
let unsubscribe = null

onMounted(() => {
  const q = query(
    collection(db, `users/${user.value.uid}/notifications`),
    orderBy('createdAt', 'desc')
  )
  unsubscribe = onSnapshot(q, async (snap) => {
    notifications.value = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
    loading.value = false
    // Mark all unread as read in a batch
    const unread = snap.docs.filter((d) => !d.data().read)
    if (unread.length > 0) {
      const batch = writeBatch(db)
      unread.forEach((d) => batch.update(d.ref, { read: true }))
      batch.commit()
    }
  })
})

onUnmounted(() => { if (unsubscribe) unsubscribe() })

function timeAgo(ts) {
  if (!ts) return ''
  const date = ts.toDate ? ts.toDate() : new Date(ts)
  const secs = Math.floor((Date.now() - date) / 1000)
  if (secs < 60) return 'just now'
  if (secs < 3600) return `${Math.floor(secs / 60)}m ago`
  if (secs < 86400) return `${Math.floor(secs / 3600)}h ago`
  return `${Math.floor(secs / 86400)}d ago`
}
</script>
