
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVjbtoHUQqzm_ZNnMe1O8U2IP-BnxzGQ4",
  authDomain: "sunshineapp-eb70d.firebaseapp.com",
  projectId: "sunshineapp-eb70d",
  storageBucket: "sunshineapp-eb70d.appspot.com",
  messagingSenderId: "390520945121",
  appId: "1:390520945121:web:c868a470462e494388baa0"
}; 

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { db };
export { auth };