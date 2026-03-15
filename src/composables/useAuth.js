import { ref, onMounted, onUnmounted } from 'vue'
import { auth, googleProvider } from '../firebase'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'

const user = ref(null)
const authReady = ref(false)

let unsubscribe = null

export function useAuth() {
  onMounted(() => {
    unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      user.value = firebaseUser
      authReady.value = true
    })
  })

  onUnmounted(() => {
    if (unsubscribe) unsubscribe()
  })

  async function loginWithGoogle() {
    await signInWithPopup(auth, googleProvider)
  }

  async function logout() {
    await signOut(auth)
  }

  return { user, authReady, loginWithGoogle, logout }
}

// Global auth state (set up once in App.vue)
export function setupAuth() {
  unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
    user.value = firebaseUser
    authReady.value = true
  })
}

export { user, authReady }
