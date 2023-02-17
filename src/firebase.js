import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC99Mloj9ZACUJpS_wF2wn0kIc5PQ-OZac",
    authDomain: "ecommerce777.firebaseapp.com",
    projectId: "ecommerce777",
    storageBucket: "ecommerce777.appspot.com",
    messagingSenderId: "32576630209",
    appId: "1:32576630209:web:68943f373601c99dfe5340"
  }

const firebaseApp =firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {auth}