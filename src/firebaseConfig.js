import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC15h5ucdJjjNu1ldlRwCRwVZG6-kXQYPs",
  authDomain: "proyect-react-65499.firebaseapp.com",
  projectId: "proyect-react-65499",
  storageBucket: "proyect-react-65499.firebasestorage.app",
  messagingSenderId: "824207857324",
  appId: "1:824207857324:web:a3782e47d898ade3a33109"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);