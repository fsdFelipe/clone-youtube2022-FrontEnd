//codigo pego no site do firebase
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBKgtG_u4xdoROZhMV4J_VBOU3pvGu1GfQ",
  authDomain: "myvideoapp-5ef49.firebaseapp.com",
  projectId: "myvideoapp-5ef49",
  storageBucket: "myvideoapp-5ef49.appspot.com",
  messagingSenderId: "261880090832",
  appId: "1:261880090832:web:9a375fbd248bacfca3ced5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app