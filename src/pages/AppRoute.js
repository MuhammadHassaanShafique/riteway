
import Layout from '../components/layout'
import React, { useState, useEffect } from "react";
//use state hook to store the routes
//use effect hook to fetch from the firebase

const AppRoute = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    // replace this with your code to fetch the routes from Firebase
    const sampleRoutes = [
      { id: 1, name: "Route 1", fare: 10 },
      { id: 2, name: "Route 2", fare: 20 },
      { id: 3, name: "Route 3", fare: 30 }
    ];
    setRoutes(sampleRoutes);
  }, []);

  return (
   <Layout>
     <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Fare</th>
        </tr>
      </thead>
      <tbody>
        {routes.map(route => (
          <tr key={route.id}>
            <td>{route.id}</td>
            <td>{route.name}</td>
            <td>{route.fare}</td>
          </tr>
        ))}
      </tbody>
    </table>
   </Layout>
  );
};

export default AppRoute;
