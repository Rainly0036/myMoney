import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD-IumY1RDEr2Edq5kOzwYYBRFoT6L0flM",
    authDomain: "mymoney-e675a.firebaseapp.com",
    projectId: "mymoney-e675a",
    storageBucket: "mymoney-e675a.appspot.com",
    messagingSenderId: "1019882977935",
    appId: "1:1019882977935:web:b7fe58c4fdb5919751cefa"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
