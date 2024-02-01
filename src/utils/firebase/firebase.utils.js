import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  signInWithRedirect, 
  GoogleAuthProvider 
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC1OTGTL-BxtD44sDTGHnoU4zGdJW5lA0I",
  authDomain: "wozzie-clothing-db.firebaseapp.com",
  projectId: "wozzie-clothing-db",
  storageBucket: "wozzie-clothing-db.appspot.com",
  messagingSenderId: "558278433910",
  appId: "1:558278433910:web:c473947bdf23abf6079357"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signinWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);  
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch  (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
}