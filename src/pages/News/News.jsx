// import React from 'react';

import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from 'react-router-dom';
import {
    FaArrowLeft
} from 'react-icons/fa';
import EditorInsiteNews from "../Home/Home/EditorNews/EditorInsiteNews";



const News = () => {

    const news = useLoaderData();

    console.log(news);
    console.log(news.category_id);



    return (
        <div>
            <h4>News Details Comming Soon ....</h4>
            <Card border="info">

                <Card.Body>
                    {/* <Card.Title>Info Card Title</Card.Title> */}
                    <Card.Img variant="top" className="p-3" src={news.image_url} />
                    <Card.Header className="fw-bold py-2">{news.title}</Card.Header>
                    <Card.Text>
                        {news.details}
                    </Card.Text>

                    <Button className="btn btn-danger my-3 d-flex justify-content-center align-items-center gap-2"> <span><FaArrowLeft></FaArrowLeft></span><Link to={`/catagory/${news.category_id}`}> All News In This Catagory</Link></Button>
                </Card.Body>
            </Card>

            <EditorInsiteNews></EditorInsiteNews>
        </div>
    );
};

export default News;