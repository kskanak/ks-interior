import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);

  // sign up
  const handleSignUp = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login
  const handleLogin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update userinfo
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // sign out implement

  const handleLogout = () => {
    setLoader(true);
    return signOut(auth);
  };
  // google sign in

  const handleGooglesignIn = (googleProvider) => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  // github sign in
  const handleGithubsignIn = (githubProvider) => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };

  //  passoword reset

  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // email-varification

  // onauth change implement
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    handleSignUp,
    handleLogin,
    updateUserProfile,
    handleLogout,
    handleGooglesignIn,
    handleGithubsignIn,
    loader,
    passwordReset,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
