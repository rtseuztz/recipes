// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIkapXlaS8MWceY96NBjPJcFTLoSZRRvE",
  authDomain: "recipies-543b0.firebaseapp.com",
  projectId: "recipies-543b0",
  storageBucket: "recipies-543b0.appspot.com",
  messagingSenderId: "465547038876",
  appId: "1:465547038876:web:611f4e2ed677222cb6dd59",
  measurementId: "G-FLMJFFG0CH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})
export default app;

