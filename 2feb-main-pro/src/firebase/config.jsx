import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC5xPAl7_HaHkbBVpeg53L2vhB7hfiQ-DM",
  authDomain: "ndfeb-main-pro.firebaseapp.com",
  projectId: "ndfeb-main-pro",
  storageBucket: "ndfeb-main-pro.appspot.com",
  messagingSenderId: "973043794391",
  appId: "1:973043794391:web:8830ae8030c2c913b4cb92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app