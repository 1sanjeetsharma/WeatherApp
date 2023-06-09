// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj4QrLPiwqgvxN663FGxK5ZWpFSlTC7Us",
  authDomain: "weatherapi-5a63e.firebaseapp.com",
  databaseURL: "https://weatherapi-5a63e-default-rtdb.firebaseio.com",
  projectId: "weatherapi-5a63e",
  storageBucket: "weatherapi-5a63e.appspot.com",
  messagingSenderId: "420235625080",
  appId: "1:420235625080:web:08418bc947555e79fe238d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
