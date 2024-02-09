import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
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


// Initialize Cloud Firestore and get a reference to the service
const storage = getStorage(app)
export default storage;
