// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcOj8ztqOiTdog9DaOkPsObNZQ0Iq9FfU",
    authDomain: "ganeshkirana-40f91.firebaseapp.com",
    projectId: "ganeshkirana-40f91",
    storageBucket: "ganeshkirana-40f91.appspot.com",
    messagingSenderId: "526478293928",
    appId: "1:526478293928:web:cd8f841b133e8cc6533b9d",
    measurementId: "G-V6WHR5MT3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export default firestore;