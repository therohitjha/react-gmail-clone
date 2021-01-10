import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWbMwWgJ7FuxO30I-5VrUe2nfv68pa9f8",
  authDomain: "clone-e68b6.firebaseapp.com",
  projectId: "clone-e68b6",
  storageBucket: "clone-e68b6.appspot.com",
  messagingSenderId: "571392436328",
  appId: "1:571392436328:web:ee6b5ec65b09e4e1bcf3dd",
  measurementId: "G-BZ0TMHZ99V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
