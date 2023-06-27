
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/Firebase';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const UpdateUserProfile = (dName, photoUrl) => {
        return updateProfile((auth.currentUser), {
            displayName: dName,
            photoURL: photoUrl
        })
    }

    const singInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }


    const loginWithPasswordAndEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userOut=()=>{
        return signOut(auth)
    }

    const userInfo = {
        user,
        createUser,
        UpdateUserProfile,
        singInWithGoogle,
        loginWithPasswordAndEmail,
        userOut
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
        return unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;