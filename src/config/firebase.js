// Librairie
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyABPJoxoUb3vy9Iom0LwzjesnSQYtvwHOk",
    authDomain: "blog-react-a39bf.firebaseapp.com",
    databaseURL: "https://blog-react-a39bf-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "blog-react-a39bf",
    storageBucket: "blog-react-a39bf.appspot.com",
    messagingSenderId: "587608347740",
    appId: "1:587608347740:web:f4389564395d653446c299"
  };
  
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;