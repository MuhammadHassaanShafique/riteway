import React, { useEffect, useState } from 'react';
import Loader from '../../SharedComponents/Loader';

const EditModal = ({
    updateRoute,
    setShowModal,
    setRefresh,
    data = { fare: null },
}) => {
    const [routeFare, setRouteFare] = useState('');
    const [routeId, setRouteId] = useState(null);

    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!routeFare) {
            setErrorMessage('Route fare is required');
            return;
        }
        try {
            setLoading(true);
            await updateRoute(routeId, { fare: routeFare });
            setLoading(false);
            setShowModal(false);
            setRefresh(true);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log(data);
        if (data) {
            setRouteFare(data.fare);
            setRouteId(data.id);
        }
        return;
    }, []);

    return (
        <>
            <div className='modal'>
                <div className='modal-content'>
                    <h2>Edit Route</h2>
                    <div className='formContent'>
                        <form onSubmit={handleSubmit}>
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
                                {loading ? <Loader /> : 'Update'}
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

export default EditModal;
