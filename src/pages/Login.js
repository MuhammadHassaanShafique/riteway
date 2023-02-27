import React, { useState } from "react";
import {  signInWithEmailAndPassword  } from 'firebase/auth';
import { useNavigate } from "react-router";
import auth from '../utils/firebase'
import { NavLink } from "react-router-dom";
import Loader from "../components/SharedComponents/Loader";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setErrorMessage("Email and password are required");
      return;
    }
  
    try {
      setLoading(true)
      const res = await signInWithEmailAndPassword(auth, email, password);
      if(res.user){
        const token = res.user.accessToken;
        if (token) {
          localStorage.setItem('AccessToken',token)
          setLoading(false)
          navigate("/rider")
        } else {
          console.log('Not logged in')
        }
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    }
  };

  return (
    
    <div className="wrapper">
      <img src="/img/logo.jpeg" alt="logo" className="img-logo"/>
      <div>
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
            <button 
              type="submit" 
              disabled={loading} 
              className="loadingButton button"
            >
          {loading ? <Loader />:"Login" }
          </button>
          {errorMessage && <div>{errorMessage}</div>}
          </form>
      </div>
      <p>
          Create an account{' '}
          <NavLink to="/signup" >
              Sign up
          </NavLink>
      </p> 
    </div>
  );
};

export default LoginForm;

 