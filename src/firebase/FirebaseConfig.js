import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA9835Qd8uxyPUJgJaK0PwZl6diLq1OfRc",
    authDomain: "project-management-f0d8f.firebaseapp.com",
    projectId: "project-management-f0d8f",
    storageBucket: "project-management-f0d8f.appspot.com",
    messagingSenderId: "277079854658",
    appId: "1:277079854658:web:75aa6781b497d3194ee7db"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };