// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlrO5o334WJGgRr32x9LrY7X1Z2IJiha0",
  authDomain: "fir-71324.firebaseapp.com",
  projectId: "fir-71324",
  storageBucket: "fir-71324.appspot.com",
  messagingSenderId: "307125206315",
  appId: "1:307125206315:web:9e99590b9d7f65e0e4596e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig,{ analytics: false });
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app;