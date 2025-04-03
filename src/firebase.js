import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getDatabase, ref, push, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC58enCNd-UjaZ2QEyrGySa2SJ-18c3Sko",
  authDomain: "young-dcfa9.firebaseapp.com",
  projectId: "young-dcfa9",
  storageBucket: "young-dcfa9.firebasestorage.app",
  messagingSenderId: "990780712687",
  appId: "1:990780712687:web:d9fab78006b0d6fdc09d1a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db, GoogleAuthProvider, signInWithPopup, signOut, ref, push, onValue };