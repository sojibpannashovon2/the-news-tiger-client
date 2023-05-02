// import React from 'react';

import moment from "moment";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
    FaBookmark,
    FaShareAltSquare,
    FaStarHalfAlt,
    FaStar,
    FaEye
} from 'react-icons/fa';

const NewsCard = ({ news }) => {

    const { _id, title, details, image_url, author, total_view, rating } = news
    // console.log(news);

    return (
        <>
            <Card border="primary mb-4">
                <Card.Header className=" d-flex mb-2 justify-content-between">
                    <div className="d-flex justify-content-center align-items-center gap-3">
                        <div>       <Card.Img variant="top" style={{ height: "45px", width: "45px" }} className="img-thumbnail " src={author.img} />
                        </div>

                        <div className="d-flex flex-column">
                            <span>{author.name}</span>
                            <span> {moment(author.published_date).format("yyyy-mm-DD")}</span>
                        </div>
                    </div>
                    <div className="">
                        <FaBookmark></FaBookmark>
                        <FaShareAltSquare></FaShareAltSquare>
                    </div>


                </Card.Header>


                <div className="fw-bold  mx-4 px-2">
                    {title}
                </div>

                <Card.Body>
                    <Card.Img variant="top" className="p-3" src={image_url} />
                    <Card.Text>
                        {
                            details?.length < 300 ? <>{details}</> : <> {details?.slice(0, 300)} <Link to={`/news/${_id}`}>Read-More</Link></>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer >
                    <div className="d-flex justify-content-between mb-2" >
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStarHalfAlt></FaStarHalfAlt>{rating?.number}
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <FaEye></FaEye>{total_view}
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </>
    );
};

export default NewsCard;