import { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, 
  getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCjyR38dcLeSJKoLskMO1ZqIFhgFxGXan4",
  authDomain: "crack-detection-c6bae.firebaseapp.com",
  projectId: "crack-detection-c6bae",
  storageBucket: "crack-detection-c6bae.appspot.com",
  messagingSenderId: "448340358524",
  appId: "1:448340358524:web:bfff496616f57c18df20f9"
};
const FirebaseContext=createContext(null);
const app = initializeApp(firebaseConfig);
export const useFirebase =()=> useContext(FirebaseContext);
const auth=getAuth(app);
export const FirebaseProvider=(props)=>{
  const signup=(email,password)=>createUserWithEmailAndPassword(auth,email,password);
  const signin=(email, password)=> signInWithEmailAndPassword(auth, email, password);
  const signout=()=>signOut(auth);
  const[user,setUser]=useState(null);
  onAuthStateChanged(auth,(user)=>{
    if(user) setUser(user);
    else setUser(null);
  });
  const logged=user?true:false;
  return(
    <FirebaseContext.Provider value={{signup,signin,signout,user,logged}}>
        {props.children}
    </FirebaseContext.Provider>
  )     
}
