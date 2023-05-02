// import React from 'react';

import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";

const PrivateRoutes = ({ children }) => {
    const location = useLocation()
    const { user, loader } = useContext(authContext);

    if (loader) {
        return <div className="text-center my-5">
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
            </Button>{' '}
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>
};

export default PrivateRoutes;