import React from 'react';
import {  signOut } from "firebase/auth";
import auth from '../utils/firebase';
import { useNavigate, useLocation, Link } from 'react-router-dom';


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
              <Link to="/" className="brand">
                  <i className="bx bxs-smile"></i>
                  <span className="text">Rite Way</span>
              </Link>
              <ul className="side-menu top">
                  <li className={pathname === "/rider" ? "active" : ""}>
                      <Link to="/rider">
                          <i className="bx bxs-dashboard"></i>
                          <span className="text">Riders</span>
                      </Link>
                  </li>
                  <li className={pathname === "/driver" ? "active" : ""}>
                      <Link to="/driver">
                          <i className="bx bxs-shopping-bag-alt"></i>
                          <span className="text">Drivers</span>
                      </Link>
                  </li>
                  <li className={pathname === "/routes" ? "active" : ""}>
                      <Link to="/routes">
                          <i className="bx bxs-doughnut-chart"></i>
                          <span className="text">Routes</span>
                      </Link>
                  </li>
                  <li className={pathname === "/receipt" ? "active" : ""}>
                      <Link to="/receipt">
                          <i className="bx bxs-message-dots"></i>
                          <span className="text">Receipts</span>
                      </Link>
                  </li>
              </ul>
              <ul className="side-menu bottom">
                  <li>
                      <Link to={"#"} onClick={handleLogout} className="logout">
                          <i className="bx bxs-log-out-circle"></i>
                          <span className="text">Logout</span>
                      </Link>
                  </li>
              </ul>
          </section>
      </div>
  );
}

export default Sidebar
