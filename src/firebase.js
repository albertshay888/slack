import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyCqpVjor02hQGv0dkNvO3G33-jmmrZ6Mi8",
    authDomain: "slack-clone-e0e6e.firebaseapp.com",
    databaseURL: "https://slack-clone-e0e6e.firebaseio.com",
    projectId: "slack-clone-e0e6e",
    storageBucket: "slack-clone-e0e6e.appspot.com",
    messagingSenderId: "255862956856",
    appId: "1:255862956856:web:765b8ecc90bf150f3ed7cd",
    measurementId: "G-BV49NPKM1L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;