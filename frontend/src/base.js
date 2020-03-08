import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database"
const app = firebase.initializeApp({
  apiKey: "AIzaSyCy1_DvmKHUWa_TvgjXz1hk4w6lHBUjrN8",
  authDomain: "hacktech2020-d69e4.firebaseapp.com",
  databaseURL: "https://hacktech2020-d69e4.firebaseio.com",
  projectId: "hacktech2020-d69e4",
  storageBucket: "hacktech2020-d69e4.appspot.com",
  messagingSenderId: "851475839573",
  appId: "1:851475839573:web:42e899fed7cb604c70f2dc",
  measurementId: "G-1VTEHCVEHY"
});

export default app;