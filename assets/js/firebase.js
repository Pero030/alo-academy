import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  orderBy,
  setDoc,
  query
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDQp1Y5RZ8PIkagkzQgeIxVt0o7Q3vt6K4",
  authDomain: "alo-academy-a2356.firebaseapp.com",
  projectId: "alo-academy-a2356",
  storageBucket: "alo-academy-a2356.firebasestorage.app",
  messagingSenderId: "149413835754",
  appId: "1:149413835754:web:e91d45e499d07013947893",
  measurementId: "G-526SY1JQKE"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
  db,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  orderBy,
  setDoc,
  query
};
