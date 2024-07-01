// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "dp-react-firebase.firebaseapp.com",
  projectId: "dp-react-firebase",
  storageBucket: "dp-react-firebase.appspot.com",
  messagingSenderId: "297271093765",
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default getFirestore();
