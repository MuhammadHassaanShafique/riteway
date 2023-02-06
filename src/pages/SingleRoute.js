import Layout from '../components/layout'
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

const SingleRoute = () => {
 const [routes, setRoutes] = useState([]);

  useEffect(() => {
    // replace this with your code to fetch the routes from Firebase
    const sampleRoutes = [
      { id: 1, name: "Cust", fare: 10 },
      { id: 2, name: "River Garden", fare: 20 },
      { id: 3, name: "PWD", fare: 30 }
    ];
    setRoutes(sampleRoutes);
  }, []);

  return (
   <Layout>
    <main>
        <div className="head-title"></div>
        <ul className="box-info">
        </ul>
        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>Routes </h3>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Stop</th>
                  <th>Name </th>
                  <th>Fare </th>
                </tr>
              </thead>
              <tbody>
                {routes.map(route => (
                    <tr key={route.id}>
                    <td>{route.id}</td>
                    <td> <NavLink to={`#`}> {route.name} </NavLink> </td>
                    <td>{route.fare}</td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
		  </main>
   </Layout>
  );
}

export default SingleRoute
