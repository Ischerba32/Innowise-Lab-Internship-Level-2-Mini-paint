import * as firebase from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, onValue, ref } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import AuthFormParams from '../interfaces/authForm.interface';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);

export const fetchData = async (uid: string) => {
	uid &&
		(await onValue(ref(database, `images`), (snapshot) => {
			if (snapshot.val()) {
				return Object.values(snapshot.val());
			} else return [];
		}));
};

export const handleSignIn = async ({ email, password }: AuthFormParams) => {
	return await signInWithEmailAndPassword(auth, email, password);
};
