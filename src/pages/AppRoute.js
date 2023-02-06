
import Layout from '../components/layout'
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
//use state hook to store the routes
//use effect hook to fetch from the firebase

const AppRoute = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    // replace this with your code to fetch the routes from Firebase
    const sampleRoutes = [
      { id: 1, name: "Route 1", fare: 10 },
      { id: 2, name: "Route 2", fare: 20 },
      { id: 3, name: "Route 3", fare: 30 },
      { id: 4, name: "Route 4", fare: 30 },
      { id: 5, name: "Route 5", fare: 30 },
      { id: 6, name: "Route 6", fare: 30 },
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
              <h3>Routes</h3>
            </div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name </th>
                  <th>Fare </th>
                </tr>
              </thead>
              <tbody>
                {routes.map(route => (
            <tr key={route.id}>
              <td>{route.id}</td>
              <td> <NavLink to={`/routes/${route.id}`}> {route.name} </NavLink> </td>
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
};

export default AppRoute;
