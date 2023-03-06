import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyDB0ZyQaONWL5UMELG5mV2noeASRw2fClE",
  authDomain: "cultural-survival-mobile.firebaseapp.com",
  projectId: "cultural-survival-mobile",
  storageBucket: "cultural-survival-mobile.appspot.com",
  messagingSenderId: "478555958325",
  appId: "1:478555958325:web:5fad175c46abbffe89557c",
  measurementId: "G-1471C5TBDE"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
