// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8mmm7RtNX4ZlKtU5ChUuoEBm2GpCHBGs",
  authDomain: "reactjs-tiendaonline.firebaseapp.com",
  projectId: "reactjs-tiendaonline",
  storageBucket: "reactjs-tiendaonline.firebasestorage.app",
  messagingSenderId: "163145883571",
  appId: "1:163145883571:web:83c433b911a55ec2f5f5c6",
  measurementId: "G-5Z05EYRZBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
