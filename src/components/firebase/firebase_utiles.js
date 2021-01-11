import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const Config = {
    apiKey: "AIzaSyDfc8TtCxJ-S0kWYxe5QdQ9OBWqO6J5quU",
    authDomain: "crwn-db-d738f.firebaseapp.com",
    projectId: "crwn-db-d738f",
    storageBucket: "crwn-db-d738f.appspot.com",
    messagingSenderId: "1037059540051",
    appId: "1:1037059540051:web:cb15fb0fb03344124e32a6",
    measurementId: "G-Z14H9PREQY"
}

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;