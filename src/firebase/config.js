import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFyPveiddXVcl6ulpW12fDX1_Lk7qmyH8",
  authDomain: "ecoom-fd330.firebaseapp.com",
  projectId: "ecoom-fd330",
  storageBucket: "ecoom-fd330.appspot.com",
  messagingSenderId: "4616498919",
  appId: "1:4616498919:web:7b366da5d223fc84b2fc42"
};

//init firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication
const projectAuth = getAuth(app);


// init service
const projectFirestore =  getFirestore(app);

export { projectFirestore, projectAuth}