import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzksPKwkxmEJx3WNKG6ym_L_KLKiJc3aI",
  authDomain: "riteway-f9e82.firebaseapp.com",
  projectId: "riteway-f9e82",
  storageBucket: "riteway-f9e82.appspot.com",
  messagingSenderId: "993341139790",
  appId: "1:993341139790:web:15706b5ed63eb3ebce0c1f",
  measurementId: "G-1QP1DGDC5J"
};


let auth
try {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
} catch(error) {
    console.log('Error:', error)
}

export default auth 