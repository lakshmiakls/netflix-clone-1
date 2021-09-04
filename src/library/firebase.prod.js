import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed'

const config = {
  apiKey: "AIzaSyBzgHruteQcjFbRcvbTPYTvTa9H9_pfSKM",
  authDomain: "netflix-clone-87bd4.firebaseapp.com",
  projectId: "netflix-clone-87bd4",
  storageBucket: "netflix-clone-87bd4.appspot.com",
  messagingSenderId: "213354657424",
  appId: "1:213354657424:web:8ff445dca19f4f5c0d8a15"
};

  // Initialize Firebase
    const firebase = Firebase.initializeApp(config);

    // 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };