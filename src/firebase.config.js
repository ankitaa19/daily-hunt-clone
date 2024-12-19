// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIPNi-pyl9d8uEolee-ZpsEix0rX304ew",
  authDomain: "daily-hunt-62ab5.firebaseapp.com",
  projectId: "daily-hunt-62ab5",
  storageBucket: "daily-hunt-62ab5.firebasestorage.app",
  messagingSenderId: "935852913400",
  appId: "1:935852913400:web:b46d09a7c363ea30e2810d",
  measurementId: "G-QC4FFG49B4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);