// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtmv_wNTiOkux6JltjJkVEv99mD88bFgU",
  authDomain: "video-ef95e.firebaseapp.com",
  projectId: "video-ef95e",
  storageBucket: "video-ef95e.appspot.com",
  messagingSenderId: "103442295044",
  appId: "1:103442295044:web:e5f8220f9b388131a54851",
  measurementId: "G-7RVG1EFBTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app;