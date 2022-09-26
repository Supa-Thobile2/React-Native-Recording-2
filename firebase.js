// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAVHAJUosCrc9b-JSbyIls16yS2M6wgM48",
//   authDomain: "audio-f4c9c.firebaseapp.com",
//   projectId: "audio-f4c9c",
//   storageBucket: "audio-f4c9c.appspot.com",
//   messagingSenderId: "300488076526",
//   appId: "1:300488076526:web:232f7a875e1d6b6b9357ff"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db };