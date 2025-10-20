import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)

console.log(user)
  const createUser = (email, password) => {
      return createUserWithEmailAndPassword (auth, email, password);
  } 
  
  const logOut =()=>{
    return signOut(auth);
  };

  // অবজারভার ফাংশন
  useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
      });
      return ()=>{unsubscribe()};
  },[])
    const authData = {
        user,
        setUser,
       createUser,
       logOut

    }
  return (
    <AuthContext value={authData}>
        {children}
    </AuthContext>
  )
}

export default AuthProvider