import { initializeApp } from "firebase/app";
import { GoogleAuthProvider ,getAuth, signInWithPopup} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDgVyeZRPimzeuUchyBZn65KuGuCyv7N_o",
  authDomain: "react-js-blog-website-yt-70c26.firebaseapp.com",
  projectId: "react-js-blog-website-yt-70c26",
  storageBucket: "react-js-blog-website-yt-70c26.appspot.com",
  messagingSenderId: "1042168417345",
  appId: "1:1042168417345:web:a04964428e3df63b1b0ac0"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async() =>{

    let user = null;
    await signInWithPopup(auth, provider)
    .then((result)=>{
        user = result.user
    })
    .catch((err)=>{
        console.log(err);
    })
    return user;
}
