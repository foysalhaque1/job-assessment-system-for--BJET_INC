import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './Authcontext';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return ()=>{
            unSubscribe()
        }
    }, [])
    const authData = {
        user,
        setUser,
        createUser
    }
    return <AuthContext value={authData} >
        {children}
    </AuthContext>
};

export default AuthProvider;