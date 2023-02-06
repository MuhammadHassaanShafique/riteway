import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const getToken = () => {
    const token = localStorage.getItem('AccessToken')
    if(!token){
      return false;
    }
    return true;
  }

  const isAuthenticated = getToken();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: '/',
        state: { from: location },
      }}
    />
  );
};

export default PrivateRoute;