// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYq6BTHafz7NaRFY4g-pd8U1i-n_mgeF0",
  authDomain: "job-assessment-client-side.firebaseapp.com",
  projectId: "job-assessment-client-side",
  storageBucket: "job-assessment-client-side.firebasestorage.app",
  messagingSenderId: "854578281239",
  appId: "1:854578281239:web:afe2e99ab77a5120fe1552"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;