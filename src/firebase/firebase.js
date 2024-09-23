// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBAXfWbRVjG8qqMapfBv0ZGF1cWTm3f_9A",
  authDomain: "life-and-med-tech.firebaseapp.com",
  projectId: "life-and-med-tech",
  storageBucket: "life-and-med-tech.appspot.com",
  messagingSenderId: "969170008660",
  appId: "1:969170008660:web:4647bc6d868a9a0f4bcbc1",
  measurementId: "G-RVVV7TQ8GG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Firestore instance
export const storage = getStorage(app); // Firebase Storage instance