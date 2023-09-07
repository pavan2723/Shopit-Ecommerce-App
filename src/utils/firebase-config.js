import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyB2nnoO_O-o27q6-d0i32d2TbyaUPoyrbU",
    authDomain: "ecommerce-a20e1.firebaseapp.com",
    projectId: "ecommerce-a20e1",
    storageBucket: "ecommerce-a20e1.appspot.com",
    messagingSenderId: "971557613800",
    appId: "1:971557613800:web:14abe51291419044c5595d",
    measurementId: "G-2MB9CV9SP3"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);