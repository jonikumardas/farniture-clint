// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD_hq9qyMKMmKjc5KugqbbPCHngLvggqao",
  authDomain: "farniture-685d8.firebaseapp.com",
  projectId: "farniture-685d8",
  storageBucket: "farniture-685d8.appspot.com",
  messagingSenderId: "224533511384",
  appId: "1:224533511384:web:9f6871aba83005ac306bad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth