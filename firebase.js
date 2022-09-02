import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvMXN-lQ-xsG5QCJ9nQYxaIbJSEst-_tc",
  authDomain: "fir-188eb.firebaseapp.com",
  projectId: "fir-188eb",
  storageBucket: "fir-188eb.appspot.com",
  messagingSenderId: "870151050496",
  appId: "1:870151050496:web:e7405888cc743e0c484fe5",
  measurementId: "G-6DJDVNJPCF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
