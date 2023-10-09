import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDauPE9A8rnfFnRaKJChQWvrDZwfnZTuLg",
    authDomain: "facebook-clone-e388c.firebaseapp.com",
    projectId: "facebook-clone-e388c",
    storageBucket: "facebook-clone-e388c.appspot.com",
    messagingSenderId: "850183098581",
    appId: "1:850183098581:web:faf62d4d9a9af0956d925c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


  export default db;
  // export
const auth = getAuth(app);
// initialize this way ^^^
const provider = new GoogleAuthProvider();
export {auth, provider};