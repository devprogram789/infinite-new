// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjGXF8qMaG2t6N5lwnTaS6lNw3iAxd6lU",
  authDomain: "proinfinite-af9e3.firebaseapp.com",
  projectId: "proinfinite-af9e3",
  storageBucket: "proinfinite-af9e3.appspot.com",
  messagingSenderId: "1016068138795",
  appId: "1:1016068138795:web:ada203a97cace28daa476e",
  measurementId: "G-0GZ0RL1FFE"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth,provider}