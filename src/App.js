import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rider from "./pages/Rider";
import Driver from "./pages/Driver";
import AppRoute from "./pages/AppRoute";
import Fares from "./pages/Fares";
import Receipt from "./pages/Receipt";
import LoginForm from './pages/Login';
import PrivateRoute from './components/auth/PrivateRoute';
import Signup from './pages/Signup';
import SingleRoute from './pages/SingleRoute';
import Loader from './components/SharedComponents/Loader';
// import { ToastContainer } from "react-toastify";

const App = () => {

  return (
      <BrowserRouter>
          {/* <ToastContainer
              position="top-right"
              hideProgressBar
              pauseOnHover
              autoClose={5000}
          /> */}
          <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/loader" element={<Loader />} />
              <Route
                  path="/rider"
                  element={
                      <PrivateRoute>
                          <Rider />
                      </PrivateRoute>
                  }
              />

              <Route
                  path="/driver"
                  element={
                      <PrivateRoute>
                          <Driver />
                      </PrivateRoute>
                  }
              />

              <Route
                  path="/routes"
                  element={
                      <PrivateRoute>
                          <AppRoute />
                      </PrivateRoute>
                  }
              />

              <Route
                  path="routes/:id"
                  element={
                      <PrivateRoute>
                          <SingleRoute />
                      </PrivateRoute>
                  }
              />

              <Route
                  path="/fares"
                  element={
                      <PrivateRoute>
                          <Fares />
                      </PrivateRoute>
                  }
              />

              <Route
                  path="/receipt"
                  element={
                      <PrivateRoute>
                          <Receipt />
                      </PrivateRoute>
                  }
              />
          </Routes>
      </BrowserRouter>
  );
    
  
}

export default App
