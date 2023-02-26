import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Loader from './../SharedComponents/Loader/index';


const Modal = ({ createRoute, setShowModal, setRefresh }) => {
    const [routeValue, setRouteValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!routeValue) {
            setErrorMessage("Value is required");
            return;
        }
        setLoading(true);
        await createRoute(routeValue);
        setLoading(false);
        setShowModal(false);
        setRefresh(true);
    };

    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <h2>Add Route</h2>
                    <div className="formContent">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="">Name</label>
                            <input
                                type="text"
                                placeholder="Enter Route Name"
                                value={routeValue}
                                onChange={(event) =>
                                    setRouteValue(event.target.value)
                                }
                                autoFocus={true}
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="loadingButton button"
                            >
                                {loading ? <Loader /> : "Submit"}
                            </button>
                            {errorMessage && <div>{errorMessage}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
