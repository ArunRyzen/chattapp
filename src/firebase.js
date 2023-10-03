
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB9eDbg8I6pszeBb1oEUS0uXRkVhp4dW0M",
  authDomain: "chatapp-540e9.firebaseapp.com",
  projectId: "chatapp-540e9",
  storageBucket: "chatapp-540e9.appspot.com",
  messagingSenderId: "352403204392",
  appId: "1:352403204392:web:da4df61118b9609ecac81d"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()