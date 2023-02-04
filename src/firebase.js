import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAc_x4mkCvQb2Ea2_R6oZwa1B0ZA8ykaTw",
        authDomain: "clone-23402.firebaseapp.com",
        projectId: "clone-23402",
        storageBucket: "clone-23402.appspot.com",
        messagingSenderId: "905635447466",
        appId: "1:905635447466:web:c5383bc0399720075b46d3",
        measurementId: "G-6YMQ94RTZ9"
});

const auth = firebase.auth();

export { auth }; 