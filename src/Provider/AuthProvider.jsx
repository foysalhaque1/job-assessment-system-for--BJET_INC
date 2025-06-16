import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './Authcontext';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    console.log(loading,user)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const logOut = () =>{
      return  signOut(auth)
    };
    const signIn = (email,password) =>{
        setLoading(true)
     return   signInWithEmailAndPassword(auth,email,password);
    };
    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    };
    const update = (updateData) =>{
      return  updateProfile(auth.currentUser,updateData)
    }
    
    useEffect(() => {
        setLoading(true)
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            unSubscribe()
        }
    }, [])
    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
         googleSignIn ,
         loading,
         setLoading,
         update
    }
    return <AuthContext value={authData} >
        {children}
    </AuthContext>
};

export default AuthProvider;