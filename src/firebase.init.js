// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAIyIP263UDHFiEV3kXAZ1xPt7KTMmsAc",
  authDomain: "pharmacy-management-d1936.firebaseapp.com",
  projectId: "pharmacy-management-d1936",
  storageBucket: "pharmacy-management-d1936.appspot.com",
  messagingSenderId: "756094668155",
  appId: "1:756094668155:web:15fc0656178c7f327f01de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;