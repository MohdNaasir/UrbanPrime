import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,  // ✅ correct way
  authDomain: "authlogin-7f20f.firebaseapp.com",
  projectId: "authlogin-7f20f",
  storageBucket: "authlogin-7f20f.appspot.com", // 
  messagingSenderId: "564280641739",
  appId: "1:564280641739:web:5c1f59e67e71aa74c0734e",
  measurementId: "G-RHP4L9XT9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // 

export { auth, provider };
