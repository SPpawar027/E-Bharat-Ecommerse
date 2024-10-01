// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBd-I1TcBTbyiTda8y05k3Wo91XlY-BsLs",
  authDomain: "e-bharat-ecommerce-4e129.firebaseapp.com",
  projectId: "e-bharat-ecommerce-4e129",
  storageBucket: "e-bharat-ecommerce-4e129.appspot.com",
  messagingSenderId: "959599808957",
  appId: "1:959599808957:web:36472c6527b3cf6afc82d4",
  measurementId: "G-BJZYQE96DQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firedb = getFirestore(app)
const auth = getAuth(app)

export {firedb  , auth}