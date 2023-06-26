
import { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import app from '../firebase/Firebase';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
const UpdateUserProfile=(dName,photoUrl)=>{
    return updateProfile((auth.currentUser),{
        displayName:dName,
        photoURL:photoUrl
    })
}
    const user = {
        name: "Rofiq",
        createUser,
        UpdateUserProfile
    }

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;