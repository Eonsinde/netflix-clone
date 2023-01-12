import firebase from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_C4wfEXKQCq7VB05UWgdcEeC9iklzUfA",
    authDomain: "netflix-clone-435b2.firebaseapp.com",
    projectId: "netflix-clone-435b2",
    storageBucket: "netflix-clone-435b2.appspot.com",
    messagingSenderId: "915837944578",
    appId: "1:915837944578:web:dac181c6882c81fa97f81b",
    measurementId: "G-VNMBETCRS8"
  }; 

const firebaseApp = firebase.initializeApp(firebaseConfig);

const projectDatabase = getFirestore(firebaseApp);
const projectAuth = getAuth()

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

export { projectDatabase, projectAuth };