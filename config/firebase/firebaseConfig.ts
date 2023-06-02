// // import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import * as firebase from "firebase/compat/app";

// const firebaseConfig = {
//     apiKey: "AIzaSyAgPITYcr9aiqIMGrSUivZZQ9Ds4Zt-FIg",
//     authDomain: "breast-cancer-risk-predi-3cc13.firebaseapp.com",
//     projectId: "breast-cancer-risk-predi-3cc13",
//     storageBucket: "breast-cancer-risk-predi-3cc13.appspot.com",
//     messagingSenderId: "807215608595",
//     appId: "1:807215608595:web:650e96ae3491c7815fa0e6"
// }

// if(!firebaseConfig.apps.length){
//     firebase.initializeApp(firebaseConfig)
// }

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// export default firebase;

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAgPITYcr9aiqIMGrSUivZZQ9Ds4Zt-FIg",
    authDomain: "breast-cancer-risk-predi-3cc13.firebaseapp.com",
    projectId: "breast-cancer-risk-predi-3cc13",
    storageBucket: "breast-cancer-risk-predi-3cc13.appspot.com",
    messagingSenderId: "807215608595",
    appId: "1:807215608595:web:650e96ae3491c7815fa0e6"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)