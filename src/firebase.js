import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyChI4w5ieh3L0cDOlBswxauoJus-McYNZI",
  authDomain: "wechat-bykuro.firebaseapp.com",
  projectId: "wechat-bykuro",
  storageBucket: "wechat-bykuro.appspot.com",
  messagingSenderId: "664732916122",
  appId: "1:664732916122:web:37767647b915b021014223",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
