import * as firebase from "firebase";

const firebaseConfig = {
  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.FIREBASE_DATABASE_URL,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID
  apiKey: "AIzaSyCle7HY74Z-TX5yDkuXX7GxRVYLoo0PPyY",
  authDomain: "blogapp-aa416.firebaseapp.com",
  databaseURL: "https://blogapp-aa416.firebaseio.com",
  projectId: "blogapp-aa416",
  storageBucket: "blogapp-aa416.appspot.com",
  messagingSenderId: "155110135697",
  appId: "1:155110135697:web:9ee9db07285383fa"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, googleAuthProvider, database as default };
// export { firebase, database as default };
