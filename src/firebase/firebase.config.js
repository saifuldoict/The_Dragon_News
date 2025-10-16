
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAvpKrbfZYH81HfP652LEDewO7DbEdDJW4",
  authDomain: "fir-fighter-320c2.firebaseapp.com",
  projectId: "fir-fighter-320c2",
  storageBucket: "fir-fighter-320c2.firebasestorage.app",
  messagingSenderId: "247800793155",
  appId: "1:247800793155:web:5797928db7ba118837ecf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);