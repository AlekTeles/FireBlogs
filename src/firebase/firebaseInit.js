import firebase from  "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB02ZcIyke0TSpJJzovthY5IiL2NZjDY4I",
    authDomain: "fireblogs-bdcc3.firebaseapp.com",
    projectId: "fireblogs-bdcc3",
    storageBucket: "fireblogs-bdcc3.appspot.com",
    messagingSenderId: "659700936683",
    appId: "1:659700936683:web:eda65fcf98f0d8ef9473ae"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export {timestamp};
  export default firebaseapp.firestore();
  

