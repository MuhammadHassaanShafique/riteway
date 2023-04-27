import React, { useState } from 'react';
import Loader from './../SharedComponents/Loader/index';

const Modal = ({ createRoute, setShowModal, setRefresh }) => {
    const [routeValue, setRouteValue] = useState('');
    const [routeFare, setRouteFare] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const [routePoints, setRoutePoints] = useState(['CUST']);

    const handleInputChange = (index, event) => {
        const newInputs = [...routePoints];
        newInputs[index] = event.target.value;
        setRoutePoints(newInputs);
    };

    const handleAddInput = () => {
        setRoutePoints([...routePoints, '']);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!routeValue) {
            setErrorMessage('Route name is required');
            return;
        }
        if (!routeFare) {
            setErrorMessage('Route fare is required');
            return;
        }
        setLoading(true);
        await createRoute({
            name: routeValue,
            fare: routeFare,
            routePoints: routePoints.map((r) => {
                return { name: r };
            }),
        });
        setLoading(false);
        setShowModal(false);
        setRefresh(true);
    };

    return (
        <>
            <div className='modal'>
                <div className='modal-content'>
                    <h2>Add Route</h2>
                    <div className='formContent'>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor=''>Name</label>
                            <input
                                type='text'
                                placeholder='Enter Route Name'
                                value={routeValue}
                                required
                                onChange={(event) =>
                                    setRouteValue(event.target.value)
                                }
                                autoFocus={true}
                            />

                            <section className='routePointsForm'>
                                {routePoints.map((value, index) => (
                                    <div key={index}>
                                        <label htmlFor={`input-${index}`}>
                                            {index === 0 && `Starting Point`}
                                            {index !== 0 &&
                                                index + 1 ===
                                                    routePoints.length &&
                                                `Ending Point`}
                                            {index !== 0 &&
                                                index + 1 !==
                                                    routePoints.length &&
                                                `Stop ${index}`}
                                        </label>
                                        <input
                                            type='text'
                                            id={`input-${index}`}
                                            name={`input-${index}`}
                                            value={value}
                                            disabled={index === 0}
                                            onChange={(event) =>
                                                handleInputChange(index, event)
                                            }
                                        />
                                    </div>
                                ))}

                                <button
                                    type='button'
                                    className='addMoreBtn'
                                    onClick={handleAddInput}
                                >
                                    + Add more
                                </button>
                            </section>
                            <label htmlFor=''>Fare</label>
                            <input
                                type='text'
                                placeholder='Enter Fare'
                                value={routeFare}
                                required
                                onChange={(event) =>
                                    setRouteFare(event.target.value)
                                }
                            />

                            <button
                                type='submit'
                                disabled={loading}
                                className='loadingButton button'
                            >
                                {loading ? <Loader /> : 'Submit'}
                            </button>
                            {errorMessage && (
                                <div className='error'>{errorMessage}</div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
