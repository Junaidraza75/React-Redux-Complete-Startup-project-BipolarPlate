import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';



var firebaseConfig = {
    apiKey: "AIzaSyAZbK3HqotdM0iS51TLmFNCDeRRHhLR9EA",
    authDomain: "todoreact-a8d0c.firebaseapp.com",
    projectId: "todoreact-a8d0c",
    storageBucket: "todoreact-a8d0c.appspot.com",
    messagingSenderId: "1023012605094",
    appId: "1:1023012605094:web:30a99db47a68bffb397867",
    measurementId: "G-NF6YLWWSKR"
  };
  // Initialize Firebase
export default  firebase.initializeApp(firebaseConfig);
