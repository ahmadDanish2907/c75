import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB2jylA0lbPNCw1IXXndKM8RlAvLSrQiQA",
  authDomain: "c75dan.firebaseapp.com",
  projectId: "c75dan",
  storageBucket: "c75dan.appspot.com",
  messagingSenderId: "349049666940",
  appId: "1:349049666940:web:a275b64b9f4dc62a4eb8f9",
  measurementId: "G-T0LR20NM59"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
