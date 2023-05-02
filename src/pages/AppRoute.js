import Layout from '../components/layout';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// firebase config
import { db } from '../utils/firebase';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    updateDoc,
} from 'firebase/firestore';
import Loader from './../components/SharedComponents/Loader/large';
import Modal from './../components/modal/index';
import EditModal from '../components/modal/editModal';

const AppRoute = () => {
    const [routes, setRoutes] = useState([]);
    const [loading, setLoading] = useState(false);
    const routesCollectionRef = collection(db, 'routes');
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [selectedRouteData, setSelectedRouteData] = useState({});
    const [refresh, setRefresh] = useState(false);

    const createRoute = async (data) => {
        await addDoc(routesCollectionRef, data);
    };

     const getRoutes = async () => {
         setLoading(true);
         const data = await getDocs(routesCollectionRef);
         setRoutes(
             data.docs.map((doc) => ({
                 ...doc.data(),
                 id: doc.id,
             }))
         );
         setLoading(false);
     };

    const updateRoute = async (id, newFields) => {
        const routeDoc = doc(db, 'routes', id);
        await updateDoc(routeDoc, newFields);
    };

    const deleteRoute = async (id) => {
        const routeDoc = doc(db, 'routes', id);
        await deleteDoc(routeDoc);
    };

    useEffect(() => {
        getRoutes();
    }, [refresh]);

    return (
        <>
            <Layout>
                <main>
                    <div className='head-title'></div>
                    <ul className='box-info'></ul>
                    <div className='table-data'>
                        <div className='order'>
                            <div className='head'>
                                <h3>Routes</h3>
                                <button
                                    type='submit'
                                    onClick={() => {
                                        setShowModal(true);
                                    }}
                                    className='routeButton success'
                                >
                                    Add Route
                                </button>
                            </div>
                            {loading ? (
                                <div className='loadingLoader'>
                                    <Loader />
                                </div>
                            ) : routes.length ? (
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name </th>
                                            <th>Fare </th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {routes.map((route, i) => (
                                            <tr key={route.id}>
                                                <td>{i + 1}</td>
                                                <td>
                                                    {' '}
                                                    <NavLink
                                                        to={`/routes/${route.id}`}
                                                    >
                                                        {route.name}
                                                    </NavLink>{' '}
                                                </td>
                                                <td>{route.fare}</td>

                                                <td className='actions'>
                                                    <button
                                                        className='routeButton success'
                                                        onClick={() => {
                                                            setShowEditModal(
                                                                true
                                                            );
                                                            setSelectedId(
                                                                route.id
                                                            );
                                                            setSelectedRouteData(
                                                                route
                                                            );
                                                        }}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className='routeButton danger'
                                                        onClick={() => {
                                                            deleteRoute(
                                                                route.id
                                                            );
                                                            setRefresh(
                                                                !refresh
                                                            );
                                                        }}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                'No Routes Found!'
                            )}
                        </div>
                    </div>
                </main>
            </Layout>
            {showModal ? (
                <Modal
                    createRoute={createRoute}
                    setShowModal={setShowModal}
                    setRefresh={setRefresh}
                />
            ) : (
                ''
            )}
            {Boolean(selectedId) && showEditModal ? (
                <EditModal
                    updateRoute={updateRoute}
                    setShowModal={setShowEditModal}
                    setRefresh={setRefresh}
                    data={selectedRouteData}
                />
            ) : (
                ''
            )}
        </>
    );
};

export default AppRoute;
