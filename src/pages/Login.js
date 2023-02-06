import React, { useState } from "react";
// import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";

// firebase configurations
 const firebaseConfig ={
   apiKey: process.env.apiKey,
   authDomain: process.env.authDomain,
   databaseURL:process.env.databaseURL,
   projectId:process.env.projectId,
   storageBucket: process.env.storageBucket,
   messagingSenderId: process.env.messagingSenderId
 };

 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setErrorMessage("Email and password are required");
      return;
    }
    // const response = await firebase.auth().signInWithEmailAndPassword(email, password)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default LoginForm;

 