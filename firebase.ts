import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATPypJQ3VWfPtgcMK9rVA29Fr50x62pGM",
    authDomain: "mid9-ed300.firebaseapp.com",
    projectId: "mid9-ed300",
    storageBucket: "mid9-ed300.appspot.com",
    messagingSenderId: "1017511511491",
    appId: "1:1017511511491:web:b7303de6021ebe1d1aa976"
  };
  
// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }