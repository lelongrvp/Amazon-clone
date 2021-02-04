import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseApp = {
  apiKey: "AIzaSyDutgEUe4SlQF8VpB61zHeHo54aKcml2Gs",
  authDomain: "clone-79f4f.firebaseapp.com",
  projectId: "clone-79f4f",
  storageBucket: "clone-79f4f.appspot.com",
  messagingSenderId: "460233193650",
  appId: "1:460233193650:web:316ac1d3e7795d849071ab",
  measurementId: "G-CTCQ3MS61T"
};

const db = firebaseApp.firestore()
const auth = firebase.auth()
var provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }