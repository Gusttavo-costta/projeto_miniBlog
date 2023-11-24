
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8uOj1yzU1KH-l1vA7XMrW8FRGESirCrk",
  authDomain: "miniblog-93162.firebaseapp.com",
  projectId: "miniblog-93162",
  storageBucket: "miniblog-93162.appspot.com",
  messagingSenderId: "216006540553",
  appId: "1:216006540553:web:ba61554248c5aee000a7d8"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };