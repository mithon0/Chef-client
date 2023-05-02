// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj9M-T8wmX_kdEaAQm9BBLwIq3-9di0eI",
  authDomain: "chef-project-7d80d.firebaseapp.com",
  projectId: "chef-project-7d80d",
  storageBucket: "chef-project-7d80d.appspot.com",
  messagingSenderId: "982423755255",
  appId: "1:982423755255:web:ef5a2f41a47cb04c1a76f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app