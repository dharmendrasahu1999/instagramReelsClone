// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8V8zo30DQSzNjqEtMzB_S6-WLBTmMkqY",
  authDomain: "reels-44c87.firebaseapp.com",
  projectId: "reels-44c87",
  storageBucket: "reels-44c87.appspot.com",
  messagingSenderId: "38322184652",
  appId: "1:38322184652:web:f9ec0328be745481dcfd69"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const firestore=firebase.firestore();

export const database={
    users:firestore.collection('users'),
    //getTimeStamp: firebase.firestore.FieldValue.serverTimestamp()
    posts: firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage();