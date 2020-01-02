import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBWsOhbh-fNwhjb47HzURp-4rqfbl3mARM",
    authDomain: "crwn-db-ea86c.firebaseapp.com",
    databaseURL: "https://crwn-db-ea86c.firebaseio.com",
    projectId: "crwn-db-ea86c",
    storageBucket: "crwn-db-ea86c.appspot.com",
    messagingSenderId: "55606002390",
    appId: "1:55606002390:web:6afa64d9f754f4e44bff77",
    measurementId: "G-SJ7E1N8RQZ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

