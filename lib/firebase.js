import firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyBLBnMwwx9IAb7SQH0jb0eSjDYx-mM40kQ",
  authDomain: "net-zero-3833c.firebaseapp.com",
  projectId: "net-zero-3833c",
  storageBucket: "net-zero-3833c.appspot.com",
  messagingSenderId: "366892451285",
  appId: "1:366892451285:web:0650206b7fba6e70d5695c",
  measurementId: "G-FWWVB87601",
});

export const auth = firebase.auth();
