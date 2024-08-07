// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB5wuo-Y875pr9FpzOgVt99I4NlLqoxMo",
  authDomain: "parachatai.firebaseapp.com",
  projectId: "parachatai",
  storageBucket: "parachatai.appspot.com",
  messagingSenderId: "501081777584",
  appId: "1:501081777584:web:752de38af1d6df169c2275",
  measurementId: "G-6B4Q1WX52J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);