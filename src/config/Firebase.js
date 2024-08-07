// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQyhzQC0VGdsth87mkSvRsMdZodgIubio",
    authDomain: "testing-stuff-material.firebaseapp.com",
    projectId: "testing-stuff-material",
    storageBucket: "testing-stuff-material.appspot.com",
    messagingSenderId: "974506114155",
    appId: "1:974506114155:web:72e6c75c0bb7fa64f4852e",
    measurementId: "G-24CNC5LVHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
