// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9T6jcxTGLk4T4x1xaVP4g1kk9ipeSWrs",
  authDomain: "beyondus-parser.firebaseapp.com",
  projectId: "beyondus-parser",
  storageBucket: "beyondus-parser.appspot.com",
  messagingSenderId: "585823466341",
  appId: "1:585823466341:web:52c0f4f7445cffb80d278c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
