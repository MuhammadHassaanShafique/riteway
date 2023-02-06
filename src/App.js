import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rider from "./pages/Rider";
import Driver from "./pages/Driver";
import AppRoute from "./pages/AppRoute";
import Fares from "./pages/Fares";
import Receipt from "./pages/Receipt";
import LoginForm from './pages/Login';


const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Rider />} />
      <Route path="/rider" element={<Rider />} />
      <Route path="/driver" exact element={<Driver />} />
      <Route path="/app-route" element={<AppRoute />} />
      <Route path="/fares" element={<Fares />} />
      <Route path="/receipt" element={<Receipt />} />
       <Route path="/login" element={<LoginForm />} />
    </Routes>
  </BrowserRouter>;
    
  
}

export default App
