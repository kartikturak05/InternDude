// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6ikCdiByirrHEhmDxPltpQJhkZYKDkuA",
  authDomain: "intern-dude-cb0ad.firebaseapp.com",
  projectId: "intern-dude-cb0ad",
  storageBucket: "intern-dude-cb0ad.firebasestorage.app",
  messagingSenderId: "983522182052",
  appId: "1:983522182052:web:13186b2379d9d316b03731",
  measurementId: "G-CSTVHV9C23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export default app;