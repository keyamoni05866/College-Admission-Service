import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider= new GoogleAuthProvider();
const AuthProvider = ({children}) => {
  const [user, setUser]= useState(null);
  const [loading, setLoading] = useState(true);

const createUser= (email, password)=>{
    setLoading(true);
   return createUserWithEmailAndPassword(auth, email, password);
}

const logIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const SignUpLoginWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}

const logOut = () =>{
    setLoading(true);
    return signOut(auth);
}
const userProfileUpdate = (currentUser, photo) =>{
    setLoading(true);
    return updateProfile(currentUser, photo)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false)
    });
    return () =>{
        return unsubscribe();
    }
},[])



    const authInfo ={
            user,
            loading,
            createUser,
            logIn,
            SignUpLoginWithGoogle,
            userProfileUpdate,
            logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;