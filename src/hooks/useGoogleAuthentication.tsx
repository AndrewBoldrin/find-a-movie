import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '@/firebase/config'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'


export function useGoogleAuthentication () {
    initializeApp(firebaseConfig)
    const provider = new GoogleAuthProvider()
    const auth = getAuth()

    async function login() {
        const response = await signInWithPopup(auth, provider)
        return response
    }

    function logout() {
        signOut(auth)
    }

    return {
        login, logout
    }
}