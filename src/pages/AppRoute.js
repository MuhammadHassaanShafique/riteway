
import Layout from '../components/layout'
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

// firebase config
import {db} from '../utils/firebase'
import { addDoc, collection , deleteDoc, doc, getDocs, updateDoc} from "firebase/firestore";

//use state hook to store the routes
//use effect hook to fetch from the firebase

// const sampleRoutes = [
//       { id: 1, name: "Route 1", fare: "Click on Route 1" },
//       { id: 2, name: "Route 2", fare:  "Click on Route 2"},
//       { id: 3, name: "Route 3", fare: "Click on Route 3"},
//       { id: 4, name: "Route 4", fare: "Click on Route 4" },
//       { id: 5, name: "Route 5", fare: "Click on Route 5" },
//       { id: 6, name: "Route 6", fare: "Click on Route 6" },
//     ];

const AppRoute = () => {
  const [routes, setRoutes] = useState([]);
  const routesCollectionRef = collection(db, "routes")

  // const createUser = async () => {
  //   await addDoc(routesCollectionRef, { name: newName });
  // };

  const updateUser = async (id, age) => {
    const routeDoc = doc(db, "routes", id);
    const newFields = { age: age + 1 };
    await updateDoc(routeDoc, newFields);
  };

  const deleteUser = async (id) => {
    const routeDoc = doc(db, "routes", id);
    await deleteDoc(routeDoc);
  };

  const getRoutes = async() => {
    const data = await getDocs(routesCollectionRef)
    setRoutes(data.docs.map((doc) => ({ 
      ...doc.data(), 
      id: doc.id 
    })));
  }

  useEffect(() => {
    getRoutes()
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
               <button
                    type="submit" 
                    onClick={()=>{}}   
                    className="routeButton success"         
                >  
                  Add Route                   
                </button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name </th>
                  <th>View </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {routes.map(route => (
                    <tr key={route.id}>
                      <td>{route.id}</td>
                      <td> <NavLink to={`/routes/${route.id}`}> {route.name} </NavLink> </td>
                      <td>{route.fare}</td>
                      <td className='actions'>
                        <button className="routeButton success">Edit</button>
                        <button className="routeButton danger" onClick={() => deleteUser(route.id)}>Delete</button>
                      </td>
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
