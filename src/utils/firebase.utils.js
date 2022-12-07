import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDylaqJrXlYPB-Av7X3Ky72Ztdjlr9qfyU",
  authDomain: "kings-db-24541.firebaseapp.com",
  projectId: "kings-db-24541",
  storageBucket: "kings-db-24541.appspot.com",
  messagingSenderId: "794704012571",
  appId: "1:794704012571:web:fdfc040cebfa0b1c281fbe",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// instructions for each istance of provider(class)
const googleProvider = new GoogleAuthProvider();

// take a config obj, we tell how he provider should behave.
// select account everytime you want to sign in
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);

  //   return a async function that in its promiste has all the data
  //   from user who just used google sign in
  //   including uniqe id
};

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// our database
export const db = getFirestore();

// method to get user data and store it inside firestorm
export const createDocFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;
  // check if there is existing doc refrence (obj from firestore regarding instances of doc model)
  const userDocRef = doc(db, "users", userAuth.user.uid); //1.database 2.collectio 3.identyfier(uniqe id)
  console.log(userDocRef);

  //   users data
  const userSnapshot = await getDoc(userDocRef);

  //   allows us to check if this user already exist and check the data that has been passed
  //   console.log(userSnapshot);
  //   console.log(userSnapshot.exists())

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth.user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.error(error);
    }
  }
  //   if user data exists - user data

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
