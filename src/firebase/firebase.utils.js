import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD9Ss7aZOfSv2__Kgg0JMv5mtVpotHxvb0",
    authDomain: "crwn-clothingdb-c3574.firebaseapp.com",
    databaseURL: "https://crwn-clothingdb-c3574.firebaseio.com",
    projectId: "crwn-clothingdb-c3574",
    storageBucket: "crwn-clothingdb-c3574.appspot.com",
    messagingSenderId: "584216825928",
    appId: "1:584216825928:web:01e3f51a533f9c78ddc87d",
    measurementId: "G-MPLE1ZJKQS"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider =  new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;


