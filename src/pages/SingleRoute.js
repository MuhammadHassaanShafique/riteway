import Layout from "../components/layout";
import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
// firebase config
// import {db} from '../utils/firebase'
// import {
//     addDoc,
//     collection ,
//     deleteDoc,
//     doc,
//     getDocs,
//     updateDoc} from "firebase/firestore";

const SingleRoute = () => {
    const params = useParams();
    //   const routesCollectionRef = collection(db, "routePoints")
    // const [allRoutes, setAllRoutes] = useState([]);
    const { id } = params;
    const [routes, setRoutes] = useState([]);

    const allRoutes = [
        {
            routeId: 1,
            route: [
                { id: 1, name: "Cust", fare: "Starting point" },
                { id: 2, name: "River Garden", fare: 20000 },
                { id: 3, name: "PWD", fare: 25000 },
            ],
        },
        {
            routeId: 2,
            route: [
                { id: 1, name: "Cust", fare: "Starting point" },
                { id: 2, name: "Model Town", fare: 15000 },
                { id: 3, name: "Bahria Town", fare: 20000 },
            ],
        },
        {
            routeId: 3,
            route: [
                { id: 1, name: "Cust", fare: "Starting point" },
                { id: 2, name: "Khanapul", fare: 35000 },
                { id: 3, name: "Ghori Town", fare: 40000 },
                { id: 4, name: "I-8", fare: 45000 },
            ],
        },
    ];

    // useEffect(() =>{
    //   fetchPoints();
    // },[])

    // useEffect(() => {
    //   if(id){
    //     getSingleRouteDetails(id)
    //   }
    //   console.log(routes)
    // }, [id, allRoutes]);

    //  const fetchPoints = async () => {
    //      const data = await getDocs(routesCollectionRef);
    //      setRoutes(
    //          data.docs.map((doc) => ({
    //              ...doc.data(),
    //              id: doc.id,
    //          }))
    //      );
    //  };

    // const getSingleRouteDetails = (id) => {
    //   if(allRoutes.length){
    //     console.log(allRoutes);
    //     // const updatedRoutes = allRoutes.filter(r => r.routeId === id)[0]
    //     // setRoutes(updatedRoutes)
    //   }
    //   console.log(routes);
    // }

    console.log(routes);

    useEffect(() => {
        if (id) {
            // const updatedRoutes = allRoutes.filter(
            //     (r) => r.routeId === id
            // )[0];
            setRoutes(allRoutes[0]);
        }
    }, [id]);

    return (
        <Layout>
            <main>
                <div className="head-title"></div>
                <ul className="box-info"></ul>
                <div className="table-data">
                    <div className="order">
                        <div className="head">
                            <h3>Routes {allRoutes[0].routeId} </h3>
                            <button
                                type="submit"
                                onClick={() => {}}
                                className="routeButton success"
                            >
                                Add Route Points
                            </button>
                        </div>
                        {routes.length ? (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Stop</th>
                                        <th>Name </th>
                                        <th>Fare </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {routes.length
                                        ? routes.route.map((route) => (
                                              <tr key={route.id}>
                                                  <td>{route.id}</td>
                                                  <td>
                                                      {" "}
                                                      <NavLink to={`#`}>
                                                          {" "}
                                                          {route.name}{" "}
                                                      </NavLink>{" "}
                                                  </td>
                                                  <td>{route.fare}</td>
                                              </tr>
                                          ))
                                        : ""}
                                </tbody>
                            </table>
                        ) : (
                            "No Routes Created"
                        )}
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default SingleRoute;
