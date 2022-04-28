import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyB5FITj9Fc80CBkHlzJXlSeGp4aATqG_o4",
    authDomain: "cardotcom-30121.firebaseapp.com",
    projectId: "cardotcom-30121",
    storageBucket: "cardotcom-30121.appspot.com",
    messagingSenderId: "931840705941",
    appId: "1:931840705941:web:2bfaeadaece1ba0600629c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;