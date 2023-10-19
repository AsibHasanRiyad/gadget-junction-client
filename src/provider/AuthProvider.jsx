/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const auth = getAuth(app);
    // create User
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login with email and password
    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //login with google
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider)
    }

    //logout
    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }

    //on auth state change
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('Hello', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
    },[auth])
    const authInfo ={
        createUser,
        loading,
        user,
        logOut,
        logIn,
        googleSignIn,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;