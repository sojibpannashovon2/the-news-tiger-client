// import React from 'react';

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../Newscard/NewsCard";

const Catagory = () => {
    const { id } = useParams();

    const [pd, setPd] = useState([]);
    const catagories = useLoaderData();
    useEffect(() => {

        const cagoryApi = `http://localhost:5000/catagories`
        fetch(cagoryApi)
            .then(res => res.json())
            .then(data => setPd(data))
            .catch(error => {
                console.log(error);
            })
    }, [])

    // console.log(pd);


    // const result = pd.find(m => m.id == id)
    // console.log(result);


    return (
        <div >
            {
                id && <h4 className="text-center">Catagory News Amount: {catagories.length}</h4>
            }
            {/* <h4>Catagory Name:  {result.name}</h4> */}
            {
                catagories.map(news => <NewsCard key={news._id}
                    news={news}
                ></NewsCard>)
            }

        </div>
    );
};

export default Catagory;