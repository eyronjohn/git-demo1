import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBrih--HOl9fvpppPVR_CRkFJdPqRbkuc4",
  authDomain: "lost-pet-system-b01a9.firebaseapp.com",
  databaseURL: "https://lost-pet-system-b01a9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lost-pet-system-b01a9",
  storageBucket: "lost-pet-system-b01a9.firebasestorage.app",
  messagingSenderId: "780964503743",
  appId: "1:780964503743:web:670a81ae584e7a8f28e60a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);