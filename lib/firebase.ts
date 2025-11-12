// 📁 lib/firebase.ts
import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAoQR8jtSTRIvJLDW0UzSAiTAE7LAjjD-4",
  authDomain: "smartapp-ai-d15af.firebaseapp.com",
  projectId: "smartapp-ai-d15af",
  storageBucket: "smartapp-ai-d15af.firebasestorage.app",
  messagingSenderId: "165317168335",
  appId: "1:165317168335:web:ce2efd4f9073a5f740fbba"
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

export const auth = getAuth(app)
export const db = getFirestore(app)
