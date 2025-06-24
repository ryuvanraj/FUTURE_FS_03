import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQK51AdbsYhJT7ybgXhSzQZ8Lzw3VocDg",
  authDomain: "adidas-fbb49.firebaseapp.com",
  projectId: "adidas-fbb49",
  storageBucket: "adidas-fbb49.appspot.com", // fixed typo here
  messagingSenderId: "868455785151",
  appId: "1:868455785151:web:b6f242529aad700ce81c0a",
  measurementId: "G-H05D9P9HJ0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
