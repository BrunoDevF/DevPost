import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyAIs4GPpD4ij6t3CnZ_zgZgd1Wpo1jdwFE",
  authDomain: "devpost-c3111.firebaseapp.com",
  databaseURL: "https://devpost-c3111-default-rtdb.firebaseio.com",
  projectId: "devpost-c3111",
  storageBucket: "devpost-c3111.appspot.com",
  messagingSenderId: "575861225592",
  appId: "1:575861225592:web:56a7ef0c0b6e48b9f3d58d"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;