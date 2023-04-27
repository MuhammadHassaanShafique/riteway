import Layout from '../components/layout';
import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import appController from '../services/appController';
import Loader from '../components/SharedComponents/Loader';

const SingleRoute = () => {
    const params = useParams();
    const { id } = params;
    const [stops, setStops] = useState([]);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchPoints = async () => {
            setLoading(true);
            const routesData = await appController.getCollectionData('routes');
            const filterRoute = routesData.filter((r) => r.id === id);

            if (filterRoute.length) {
                setStops(filterRoute[0].routePoints);
                setName(filterRoute[0].name);
            }
            setLoading(false);
        };
        fetchPoints();
    }, []);

    return (
        <Layout>
            <main>
                <div className='head-title'></div>
                <ul className='box-info'></ul>
                <div className='table-data'>
                    {loading ? (
                        <div className='loadingLoader'>
                            <Loader />
                        </div>
                    ) : (
                        <div className='order'>
                            <div className='head'>
                                <h3>Stops of {name} </h3>
                            </div>
                            {stops.length ? (
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Stop #</th>
                                            <th>Name </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stops.length
                                            ? stops.map((stop, i) => (
                                                  <tr key={i}>
                                                      <td>
                                                          {i === 0 &&
                                                              `Starting Point`}
                                                          {i !== 0 &&
                                                              i + 1 ===
                                                                  stops.length &&
                                                              `Ending Point`}
                                                          {i !== 0 &&
                                                              i + 1 !==
                                                                  stops.length &&
                                                              `Stop ${i}`}
                                                      </td>
                                                      <td>{stop.name}</td>
                                                  </tr>
                                              ))
                                            : ''}
                                    </tbody>
                                </table>
                            ) : (
                                'No Routes Created'
                            )}
                        </div>
                    )}
                </div>
            </main>
        </Layout>
    );
};

export default SingleRoute;
