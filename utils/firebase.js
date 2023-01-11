import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/analytics";
import "firebase/functions";
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  appId: process.env.REACT_APP_ID
};
let app;

if (!firebase.apps.length) {
  app = firebase.initializeApp(config);
}


export default app;
