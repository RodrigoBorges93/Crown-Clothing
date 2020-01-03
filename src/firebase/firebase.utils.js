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

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    console.log(snapShot);

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      } catch(error){
          console.log('error creating user', error.message);
      }
    }

    return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

