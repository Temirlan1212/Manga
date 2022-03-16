import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

import "firebase/compat/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCjtECMyIR3z1psX_ynqgzif30vc0jmgAk",
  authDomain: "manga-def5a.firebaseapp.com",
  projectId: "manga-def5a",
  storageBucket: "manga-def5a.appspot.com",
  messagingSenderId: "758556800997",
  appId: "1:758556800997:web:18d6ba0c77a76e0ba1a10c",
  measurementId: "G-3BK7R6RNF5",
};

const fire = firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();
// const auth = firebase.auth();

// export { db, auth };

export default fire;
