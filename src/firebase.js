import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8f3b-7qhq5J5YHLx2st7UWCfwNPN5yn4",
    authDomain: "scholarly-sc.firebaseapp.com",
    projectId: "scholarly-sc",
    storageBucket: "scholarly-sc.appspot.com",
    messagingSenderId: "6494450219",
    appId: "1:6494450219:web:c1f7966a1525f61140706e",
    measurementId: "G-SWV8TB71YF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };