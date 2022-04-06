// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLQlUPBaBTgq34ZwhEiWqq8o8nn2omLXA",
  authDomain: "ecommerce-react-1ec47.firebaseapp.com",
  projectId: "ecommerce-react-1ec47",
  storageBucket: "ecommerce-react-1ec47.appspot.com",
  messagingSenderId: "633510050838",
  appId: "1:633510050838:web:7b3e835635c676c6900937",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
