// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use from https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeMXFdAJXT38AzZhchEhRbb6E6Fk2CZkI",
  authDomain: "jwitter-jean.firebaseapp.com",
  projectId: "jwitter-jean",
  storageBucket: "jwitter-jean.appspot.com",
  messagingSenderId: "21546858444",
  appId: "1:21546858444:web:034f331076ee6844818f69",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
