import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDtfyzHw1d8XG2-qfVEfx0_MD1d0WFw9bk",
  authDomain: "ymcodes.firebaseapp.com",
  projectId: "ymcodes",
  storageBucket: "ymcodes.appspot.com",
  messagingSenderId: "202860046750",
  appId: "1:202860046750:web:603aa9bc831ef5cee54e8f",
  measurementId: "G-6475RC6NE1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);