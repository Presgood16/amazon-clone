import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0eBT3O9yDXPRhQ1hPrYuDbB5G-kK-k28",
  authDomain: "clone-2aa34.firebaseapp.com",
  projectId: "clone-2aa34",
  storageBucket: "clone-2aa34.appspot.com",
  messagingSenderId: "721243571813",
  appId: "1:721243571813:web:5ec6af8dc22a39e536688c",
  measurementId: "G-P88XJWNJ6B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth(); 

export {db, auth};