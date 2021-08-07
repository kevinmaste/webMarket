import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBJL1Wa0DvlfgBJOdfwLoH3N6yiIvpBYf4",
    authDomain: "ced-web-b05c5.firebaseapp.com",
    projectId: "ced-web-b05c5",
    storageBucket: "ced-web-b05c5.appspot.com",
    messagingSenderId: "287062717017",
    appId: "1:287062717017:web:7ffb224d30eb9fd08a7748"
};
//for initialize app
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider}

/*
* before to use firebase you need to add dependencies by using this command
* npm add firebase firebase-tools or yarn add firebase firebase-tools
* */





















