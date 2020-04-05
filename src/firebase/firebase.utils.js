import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCldT-k19zbPNzrUm2RY8Gp1FzxvVp5Xro",
    authDomain: "crwn-db-93e2c.firebaseapp.com",
    databaseURL: "https://crwn-db-93e2c.firebaseio.com",
    projectId: "crwn-db-93e2c",
    storageBucket: "crwn-db-93e2c.appspot.com",
    messagingSenderId: "637890887949",
    appId: "1:637890887949:web:368d1e192628b898827044",
    measurementId: "G-3MBZVF1WZN"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt : 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;