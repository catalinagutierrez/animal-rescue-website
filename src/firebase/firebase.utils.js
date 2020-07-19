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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();	

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log(error.message);
		}
	}
	return userRef; //always return it because we may need it
}

export default firebase;