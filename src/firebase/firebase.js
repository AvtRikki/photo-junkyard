import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCWlZmfmNtAlkuZqkwpTv-ULuUT_I3osgg",
  authDomain: "photo-junkyard.firebaseapp.com",
  projectId: "photo-junkyard",
  storageBucket: "photo-junkyard.appspot.com",
  messagingSenderId: "374307387056",
  appId: "1:374307387056:web:03982b1f0f0ea874b3ad75",
  measurementId: "G-CN1ZS8X7QE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage }