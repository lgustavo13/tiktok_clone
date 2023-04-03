import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAwxs15fYxyAjf9F5YpVCSLLsXVLyR8wLM",
  authDomain: "tiktok---jornada-1ac29.firebaseapp.com",
  projectId: "tiktok---jornada-1ac29",
  storageBucket: "tiktok---jornada-1ac29.appspot.com",
  messagingSenderId: "865485035930",
  appId: "1:865485035930:web:e64b7d4f6b0504b0be0223"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;