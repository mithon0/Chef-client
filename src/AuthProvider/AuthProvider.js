import React, {  createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext =createContext(null);
const auth =getAuth(app)



const AuthProvider = ({children}) => {
    const name ='jsfhsgfhj';


    const createUserWithGoogle=(googleProvider)=>{
       return signInWithPopup(auth,googleProvider)
    }
    const createUserWithGitHub =(GitProvider)=>{
        return signInWithPopup(auth,GitProvider)
    }
    const createUserWithEmailPass=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const authInfo={
        name,
        createUserWithGoogle,
        createUserWithGitHub,
        createUserWithEmailPass,
        logIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;