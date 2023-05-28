import { getApp, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

let firebaseApp;

if(!firebaseApp){
  firebaseApp = initializeApp({
    apiKey: "AIzaSyAgPITYcr9aiqIMGrSUivZZQ9Ds4Zt-FIg",
    authDomain: "breast-cancer-risk-predi-3cc13.firebaseapp.com",
    projectId: "breast-cancer-risk-predi-3cc13",
    storageBucket: "breast-cancer-risk-predi-3cc13.appspot.com",
    messagingSenderId: "807215608595",
    appId: "1:807215608595:web:650e96ae3491c7815fa0e6"
  });
}

export const firebaseAuth = getAuth(getApp());
export default firebaseApp;