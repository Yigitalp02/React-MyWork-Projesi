// src/components/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnxKqjlOn_i6C235rfjnE5FahIjOxeWrQ",
  authDomain: "mywork-497c9.firebaseapp.com",
  databaseURL: "https://mywork-497c9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mywork-497c9",
  storageBucket: "mywork-497c9.appspot.com",
  messagingSenderId: "1030977091971",
  appId: "1:1030977091971:web:d6d62bec2e948d601d1eb6",
  measurementId: "G-2TDSDFK9B2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);