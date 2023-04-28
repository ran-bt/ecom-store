import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCszenidZAfduhzO-etOaO6u8kotxrr3m8",
  authDomain: "ecom-store-db-9961e.firebaseapp.com",
  projectId: "ecom-store-db-9961e",
  storageBucket: "ecom-store-db-9961e.appspot.com",
  messagingSenderId: "979275028694",
  appId: "1:979275028694:web:be339d9e5b34133fee9177",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocfromGoogleAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);
  //check to see if user exist
  console.log(userSnapshot.exists());

  //if user does not exist create new user

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  //if user exist return user
  return userDocRef;
};
