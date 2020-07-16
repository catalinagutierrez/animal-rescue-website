import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC2U3rGxL_LRdFYSvmnxZfdOYaLvk_Wnfs",
    authDomain: "crwn-db-3fcf9.firebaseapp.com",
    databaseURL: "https://crwn-db-3fcf9.firebaseio.com",
    projectId: "crwn-db-3fcf9",
    storageBucket: "crwn-db-3fcf9.appspot.com",
    messagingSenderId: "185730970297",
    appId: "1:185730970297:web:edacb43a9bba38ff47e168",
    measurementId: "G-VJ57ZKK0BY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;