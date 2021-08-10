import firebase from "firebase";

//put your firebaseConfig here
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
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





















