import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDG9S8yywCTJ7LVooyWSVUF1M71fLrNSkM",
  authDomain: "image-community-19b98.firebaseapp.com",
  projectId: "image-community-19b98",
  storageBucket: "image-community-19b98.appspot.com",
  messagingSenderId: "311454338417",
  appId: "1:311454338417:web:38cd402dca3ca455657ad0",
  measurementId: "G-YQ3T9DCY3H"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export{auth, apiKey, firestore, storage};