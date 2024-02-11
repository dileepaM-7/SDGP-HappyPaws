import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA9-AwJTkt6a-fBlCFB7WaT9gAp8NmeN98",
    authDomain: "happypaws-authentication.firebaseapp.com",
    projectId: "happypaws-authentication",
    storageBucket: "happypaws-authentication.appspot.com",
    messagingSenderId: "619666173292",
    appId: "1:619666173292:web:3126b431a6ce8c8bd95749",
    measurementId: "G-48SWJ3K485"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)