

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";

import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCcUnVZUoDscOKdxR511e_ZuZEbCWJ6M3Q",
  authDomain: "athousandthingsaboutme.firebaseapp.com",
  projectId: "athousandthingsaboutme",
  storageBucket: "athousandthingsaboutme.appspot.com",
  messagingSenderId: "902962533641",
  appId: "1:902962533641:web:896c6c0e3800a885e4afd8",
  measurementId: "G-M7KMYF6HSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);


export const auth = getAuth(app)
export default app








// if (typeof window !== 'undefined') {
//   import('firebase/analytics').then((firebase) => {
//     if (firebase.isSupported()) {
//       const analytics = firebase.getAnalytics();
//       // Initialize Firebase Analytics
//       firebase.analytics();
//     }
//   });
// }