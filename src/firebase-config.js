import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDzFwXk20Lum9lsMTxVGharU8-j6xY4ZTU",
  authDomain: "login-with-firebase-3c0d8.firebaseapp.com",
  projectId: "login-with-firebase-3c0d8",
  storageBucket: "login-with-firebase-3c0d8.appspot.com",
  messagingSenderId: "846832509762",
  appId: "1:846832509762:web:0d3552504fd9c555ee9edb",
  measurementId: "G-WDKGW7FLB4",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);