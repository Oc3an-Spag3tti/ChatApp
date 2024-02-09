import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAWfMTY2kSdgWHT-tqQ_2A9zUm1q2jdvik",
  authDomain: "sapphire-chat-97e01.firebaseapp.com",
  projectId: "sapphire-chat-97e01",
  storageBucket: "sapphire-chat-97e01.appspot.com",
  messagingSenderId: "472422701140",
  appId: "1:472422701140:web:dc30cbc8f9d5a8accd75c1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
