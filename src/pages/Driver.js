import React, { useCallback, useEffect, useState } from 'react';
import Layout from '../components/layout';
import appController from '../services/appController';
import ImageViewer from 'react-simple-image-viewer';
import Loader from '../components/SharedComponents/Loader';

const Driver = () => {
    const [loading, setLoading] = useState(false);
    const [drivers, setDrivers] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [images, setImages] = useState([]);

    const openImageViewer = useCallback((index, img) => {
        setCurrentImage(index);
        setImages([img]);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
        setImages([]);
    };

    const defaultURL =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgc2u0F9JdscSSIM4LH0ca2FLNgVS-vat7LSZKFb73azHEfhVfW7vwnFaq5bidMl1_tsg';

    useEffect(() => {
        const fetchDriverData = async () => {
            setLoading(true);
            const driversData = await appController.getCollectionData(
                'users_prod'
            );
            setDrivers(driversData.filter((r) => r.type === 'Driver'));
            setLoading(false);
        };
        fetchDriverData();
    }, []);

    return (
        <div>
            <Layout>
                <main>
                    <div className='table-data'>
                        <div className='order'>
                            <div className='head'>
                                <h3>Registered Drivers</h3>
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
                                            <th>CNIC</th>
                                            <th>Vehicle Number</th>
                                            <th>License</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {drivers.map((r, index) => (
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
                                                <td>{r.cnic}</td>
                                                <td>{r.vehicleNumber}</td>
                                                <td>
                                                    {r.licenseUrl && (
                                                        <img
                                                            src={r.licenseUrl}
                                                            onClick={() =>
                                                                openImageViewer(
                                                                    0,
                                                                    r.licenseUrl
                                                                )
                                                            }
                                                            alt='people'
                                                        />
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                    {isViewerOpen && (
                        <ImageViewer
                            src={images}
                            currentIndex={currentImage}
                            disableScroll={false}
                            closeOnClickOutside={true}
                            onClose={closeImageViewer}
                            backgroundStyle={{
                                backgroundColor: 'rgba(0,0,0,0.5)',
                            }}
                        />
                    )}
                </main>
            </Layout>
        </div>
    );
};

export default Driver;
