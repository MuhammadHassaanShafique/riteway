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

const App = () => {
  


  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/signup" element={<Signup/>}/>
    
      <Route path="/rider" element={
        <PrivateRoute>
          <Rider />
          </PrivateRoute>
      }/>
     
      <Route path="/driver" element={
         <PrivateRoute>
           <Driver />
          </PrivateRoute>
      } />

      <Route path="/routes" element={
         <PrivateRoute>
           <AppRoute />
          </PrivateRoute>
      } />

      <Route path="/fares" element={
         <PrivateRoute>
           <Fares />
          </PrivateRoute>
      } />

      <Route path="/receipt" element={
         <PrivateRoute>
           <Receipt />
          </PrivateRoute>
      } />

    </Routes>
  </BrowserRouter>;
    
  
}

export default App
