import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAJXTxJsVLe0jY2xcZ-AwDsWeFOwbv9oYw",
    authDomain: "moon-store-15600.firebaseapp.com",
    projectId: "moon-store-15600",
    storageBucket: "moon-store-15600.appspot.com",
    messagingSenderId: "1054842651103",
    appId: "1:1054842651103:web:f73853fbfed7ed8e14846a"
});

export const getFirebase = () => {
    return app
}

//Funciones de firebase 

export const getFirestore = () => {
    return firebase.firestore(app)
}