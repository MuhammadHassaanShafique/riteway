import Layout from '../components/layout'
import React, { useState, useEffect } from "react";
import { NavLink, useParams } from 'react-router-dom';

const SingleRoute = () => {
 const [routes, setRoutes] = useState([]);
 const params = useParams();
 const { id } = params;

 const allRoutes = [
    { 
      routeId : 1, 
      route :  [
        { id: 1, name: "Cust", fare: 10 },
        { id: 2, name: "River Garden", fare: 20 },
        { id: 3, name: "PWD", fare: 30 }
      ]
    },
    { 
      routeId : 2, 
      route :  [
        { id: 1, name: "Cust", fare: 10 },
        { id: 2, name: "Model Town", fare: 20 },
        { id: 3, name: "Bahria Town", fare: 30 }
      ]
    },
    { 
      routeId : 3, 
      route :  [
        { id: 1, name: "Cust", fare: 10 },
        { id: 2, name: "Khanapul", fare: 20 },
        { id: 3, name: "Ghori Town", fare: 30 },
        { id: 4, name: "I-8", fare: 30 }
      ]
    },
  ];

  useEffect(() => {
    if(id){
      const updatedRoutes = allRoutes.filter(r => r.routeId === Number(id))[0]
      setRoutes(updatedRoutes.route)
    } 
  }, [id]);

  console.log(routes)

  return (
   <Layout>
    <main>
        <div className="head-title"></div>
        <ul className="box-info">
        </ul>
        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>Routes {id} </h3>
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
                {routes.length ? (routes.map(route => (
                    <tr key={route.id}>
                    <td>{route.id}</td>
                    <td> <NavLink to={`#`}> {route.name} </NavLink> </td>
                    <td>{route.fare}</td>
                    </tr>
                ))) : <p className='wrapper-text'> No Route Created... </p>}
              </tbody>
            </table>
          </div>
        </div>
		  </main>
   </Layout>
  );
}

export default SingleRoute
