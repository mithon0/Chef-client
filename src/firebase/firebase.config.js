// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
console.log("environment", process.env.REACT_APP_SECRET_NAME);

const firebaseConfig = {
  apiKey:process.env.REACT_APP_SECRET_API_KEY,
  authDomain: process.env.REACT_APP_SECRET_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_SECRET_PROJECT_ID,
  storageBucket:process.env.REACT_APP_SECRET_STORAGE_BUCKET ,
  messagingSenderId:process.env.REACT_APP_SECRET_SENDER_ID ,
  appId:process.env.REACT_APP_SECRET_APP_ID 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app