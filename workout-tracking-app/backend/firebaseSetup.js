// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm4Xbm6f1c-zTiNZ-g6kSEN4VOg0Mdsvg",
  authDomain: "workout-tracking-app-1fcb5.firebaseapp.com",
  projectId: "workout-tracking-app-1fcb5",
  storageBucket: "workout-tracking-app-1fcb5.appspot.com",
  messagingSenderId: "257614975370",
  appId: "1:257614975370:web:45928cb3781d37c47fb873",
  measurementId: "G-VQE5LMTHQ7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app); //exporting db so we can use in other firestore functions
