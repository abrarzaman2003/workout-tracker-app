import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebaseSetup";

//const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// logs the user in with given email and password
// returns the user object to be used throughout the app
export async function login(email,password){
    const a = await signInWithEmailAndPassword(auth,email,password)
    console.log(a.user.uid);
}

//create user will make a user in firebase auth
// it will then intialize the user object and put it into the users collection
// it will finally return the user object and log in the user
export async function createUser(email,password){
    const a = await createUserWithEmailAndPassword(auth,email,password);
    console.log(a.user.uid);
}