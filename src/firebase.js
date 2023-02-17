import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPS8cd1SytbUwnMb13E0tGa4mHYRGLQkI",
  authDomain: "netflix-clone-46120.firebaseapp.com",
  projectId: "netflix-clone-46120",
  storageBucket: "netflix-clone-46120.appspot.com",
  messagingSenderId: "518977201864",
  appId: "1:518977201864:web:26252b1f20deea758267fd",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
