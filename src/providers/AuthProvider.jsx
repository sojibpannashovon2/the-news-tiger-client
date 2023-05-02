// import React from 'react';

import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firenase/firebase.config";
export const authContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    // const [user, setUser] = useState(null);

    // const user = { tp: "Adnan SAMI" }
    const user2 = null;

    const [user, setUser] = useState(null)
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, passord) => {
        return signInWithEmailAndPassword(auth, email, passord)
    }

    const logOut = () => {
        return signOut(auth);
    }

    // Observer
    useEffect(() => {
        const unsuscribed = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            return unsuscribed;
        }
    }, [])
    const authInfo = {
        user,
        user2,
        creatUser,
        signIn,
        logOut,
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;