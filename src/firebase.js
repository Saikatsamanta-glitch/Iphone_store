// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjfGVt_x6Y0Y1cKfAfuqdFYJyxZP__wkk",
  authDomain: "iphonestore-e9ea4.firebaseapp.com",
  projectId: "iphonestore-e9ea4",
  storageBucket: "iphonestore-e9ea4.appspot.com",
  messagingSenderId: "774147415926",
  appId: "1:774147415926:web:3f7a588be52544362ca457",
  measurementId: "G-WE2PKD7RT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);