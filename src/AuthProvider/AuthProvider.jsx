
import { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from "../firebase/Firebase"

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [loading, setLoading] = useState(true);
    // const user={
    //     name:"Rofiq"
    // }

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;