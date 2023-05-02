// import React from 'react';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {

    const [catagories, setCatagories] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/catagories`)
            .then(res => res.json())
            .then(data => setCatagories(data))
            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <div className="border border-sucess shadow-lg">
            <h4 className="text-center mt-2">All Catagories</h4>

            <div className="p-4 ">
                {
                    catagories.map(catagory => <p key={catagory.id}>
                        <Link to={`catagory/${catagory.id}`} className="text-decoration-none">{catagory.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;