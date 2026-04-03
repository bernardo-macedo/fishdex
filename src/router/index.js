import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
    meta: { requiresGuest: true },
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/add',
    name: 'AddFish',
    component: () => import('../views/AddFishView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/fish/:id',
    name: 'FishDetail',
    component: () => import('../views/FishDetailView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('../views/CatalogView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/catalog/:id',
    name: 'CatalogFish',
    component: () => import('../views/CatalogFishView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/feed',
    name: 'Feed',
    component: () => import('../views/FeedView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/profile/:uid',
    name: 'Profile',
    component: () => import('../views/ProfileView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/edit/:id',
    name: 'EditFish',
    component: () => import('../views/EditFishView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/stats',
    name: 'Stats',
    component: () => import('../views/StatsView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import('../views/NotificationsView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/clubs/:id',
    name: 'Club',
    component: () => import('../views/ClubView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/clubs/:id/admin',
    name: 'ClubAdmin',
    component: () => import('../views/ClubAdminView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/join/:code',
    name: 'JoinClub',
    component: () => import('../views/JoinClubView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/competitions/:id',
    name: 'Competition',
    component: () => import('../views/CompetitionView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/competitions/:id/admin',
    name: 'CompetitionAdmin',
    component: () => import('../views/CompetitionAdminView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/competitions/:id/submit',
    name: 'SubmitCatch',
    component: () => import('../views/SubmitCatchView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/join-comp/:code',
    name: 'JoinCompetition',
    component: () => import('../views/JoinCompetitionView.vue'),
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

function getCurrentUser() {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      resolve(user)
    })
  })
}

router.beforeEach(async (to) => {
  const user = await getCurrentUser()

  if (to.meta.requiresAuth && !user) {
    return { name: 'Login' }
  }
  if (to.meta.requiresGuest && user) {
    return { name: 'Home' }
  }
})

export default router
