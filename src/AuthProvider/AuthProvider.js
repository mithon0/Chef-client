import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);





const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, SetLoading] = useState(null)

    const createUserWithGoogle = (googleProvider) => {
        return signInWithPopup(auth, googleProvider)
    };
    const createUserWithGitHub = (GitProvider) => {
        return signInWithPopup(auth, GitProvider)
    };
    const createUserWithEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const logIn = (email, password) => {
        SetLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = () => {
        SetLoading(true);
        return signOut(auth);
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            SetLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, []);



    var displayName = '';
    var email = '';
    var imge = '';

    const Uuser = auth.currentUser;
    if (Uuser !== null) {
        // The user object has basic properties such as display name, email, etc.
        displayName = Uuser.displayName;
        email = Uuser.email
        imge = Uuser.photoURL


        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;
    }








    const authInfo = {

        createUserWithGoogle,
        createUserWithGitHub,
        createUserWithEmailPass,
        logIn,
        logOut,
        loading,
        user,
        // name,img
        displayName,
        email,
        imge

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;