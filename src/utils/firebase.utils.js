import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  writeBatch,
  query,
} from "firebase/firestore";

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

export const addCollectionAndDocuments = async (colectionKey, objectsToAdd) => {
  // refrence to a collection of our objects from database(where we store stuff)
  const collectionRef = collection(db, colectionKey);
  // return a batch from a database (we create a batch of our objects to pass it to database in one succesion)
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

// method to get user data and store it inside firestorm
export const createDocFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;
  // check if there is existing doc refrence (obj from firestore regarding instances of doc model)
  const userDocRef = doc(db, "users", userAuth.user.uid); //1.database 2.collectio 3.identyfier(uniqe id)
  // console.log(userDocRef);

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

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signUserOut = async () => await signOut(auth);

export const onAuthStateChangeListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// kill me
