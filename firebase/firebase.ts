// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRiLH2yA_V--BYjDNkbYlnBRZ-kV4hN9o",
  authDomain: "appointment-40337.firebaseapp.com",
  projectId: "appointment-40337",
  storageBucket: "appointment-40337.appspot.com",
  messagingSenderId: "277173606303",
  appId: "1:277173606303:web:d5f200fdc7bff76bb70faa",
  measurementId: "G-XKVP23GWKS",
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);
