import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDZmXp4n6UxTIfIm-Mmg4vra-XHE__aebg",
  authDomain: "escapebook-d3e0e.firebaseapp.com",
  projectId: "escapebook-d3e0e",
  storageBucket: "escapebook-d3e0e.appspot.com",
  messagingSenderId: "143295920728",
  appId: "1:143295920728:web:35d77b9c8c89160216e82d",
  measurementId: "G-6GQEFMYPW9",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const app = getApps()[0];
export const analytics = isSupported().then((value) => (value ? getAnalytics(app) : null));
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const signInWithGoogle = async () => await signInWithPopup(auth, new GoogleAuthProvider());
