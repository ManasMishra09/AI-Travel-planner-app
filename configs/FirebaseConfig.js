// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMIZe_v8_Jqbg9xYBhexo3O9qfcVgnwbE",
  authDomain: "aitravel-ff484.firebaseapp.com",
  projectId: "aitravel-ff484",
  storageBucket: "aitravel-ff484.appspot.com",
  messagingSenderId: "318477559809",
  appId: "1:318477559809:web:22e6933c68256180df7800"
};

// Initialize Firease
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);