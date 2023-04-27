import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import appController from '../services/appController';
import Loader from '../components/SharedComponents/Loader';

const Rider = () => {
    const [riders, setRiders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchRiderData = async () => {
            setLoading(true);
            const ridersData = await appController.getCollectionData(
                'users_prod'
            );
            setRiders(ridersData.filter((r) => r.type === 'Rider'));
            setLoading(false);
            console.log(ridersData);
        };
        fetchRiderData();
    }, []);

    const defaultURL =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgc2u0F9JdscSSIM4LH0ca2FLNgVS-vat7LSZKFb73azHEfhVfW7vwnFaq5bidMl1_tsg';

    return (
        <div>
            <Layout>
                <main>
                    <ul className='box-info'></ul>
                    <div className='table-data'>
                        <div className='order'>
                            <div className='head'>
                                <h3>Registered Riders</h3>
                            </div>
                            {loading ? (
                                <div className='loadingLoader'>
                                    <Loader />
                                </div>
                            ) : (
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Full Name</th>
                                            <th>Age</th>
                                            <th>Email</th>
                                            <th>Gender</th>
                                            <th>Phone number</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {riders.map((r, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <img
                                                        src={
                                                            r.url || defaultURL
                                                        }
                                                        alt='people'
                                                    />
                                                    <p>{r.fullName} </p>
                                                </td>
                                                <td>{r.age}</td>
                                                <td>{r.email}</td>
                                                <td>{r.gender}</td>
                                                <td>{r.phoneNumber}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </main>
            </Layout>
        </div>
    );
};

export default Rider;
