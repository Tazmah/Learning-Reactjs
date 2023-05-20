// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoLQVAAYrOhffGy0O7PQqjrcq8M_B_wII",
    authDomain: "reactapp-f91e6.firebaseapp.com",
    projectId: "reactapp-f91e6",
    storageBucket: "reactapp-f91e6.appspot.com",
    messagingSenderId: "497545391718",
    appId: "1:497545391718:web:19685f5ef829cebf00c7a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)