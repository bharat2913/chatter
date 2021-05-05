// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC8-E46nQ3Z5Ku1qE9P0kZQnQUPfBE8qwU',
  authDomain: 'slack-clone-ad3b1.firebaseapp.com',
  projectId: 'slack-clone-ad3b1',
  storageBucket: 'slack-clone-ad3b1.appspot.com',
  messagingSenderId: '955055001064',
  appId: '1:955055001064:web:eecb2f0f69127fd71d685d',
  measurementId: 'G-V3V5NRMWZX',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
