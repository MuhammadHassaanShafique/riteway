import React from 'react';
import {  signOut } from "firebase/auth";
import auth from '../utils/firebase';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const handleLogout = (e) => {    
		e.preventDefault();
		signOut(auth).then(() => {
			navigate("/");
			console.log("Signed out successfully")
		}).catch((error) => {
		});
	}

	const { pathname } = location

  return (
      <div>
          <section id="sidebar">
              <a href="/" className="brand">
                  <i className="bx bxs-smile"></i>
                  <span className="text">Rite Way</span>
              </a>
              <ul className="side-menu top">
                  <li className={pathname === "/rider" ? "active" : ""}>
                      <a href="/rider">
                          <i className="bx bxs-dashboard"></i>
                          <span className="text">Riders</span>
                      </a>
                  </li>
                  <li className={pathname === "/driver" ? "active" : ""}>
                      <a href="/driver">
                          <i className="bx bxs-shopping-bag-alt"></i>
                          <span className="text">Drivers</span>
                      </a>
                  </li>
                  <li className={pathname === "/routes" ? "active" : ""}>
                      <a href="/routes">
                          <i className="bx bxs-doughnut-chart"></i>
                          <span className="text">Routes</span>
                      </a>
                  </li>
                  <li className={pathname === "/receipt" ? "active" : ""}>
                      <a href="/receipt">
                          <i className="bx bxs-message-dots"></i>
                          <span className="text">Receipts</span>
                      </a>
                  </li>
              </ul>
              <ul className="side-menu bottom">
                  <li>
                      <a href={"#"} onClick={handleLogout} className="logout">
                          <i className="bx bxs-log-out-circle"></i>
                          <span className="text">Logout</span>
                      </a>
                  </li>
              </ul>
          </section>
      </div>
  );
}

export default Sidebar
