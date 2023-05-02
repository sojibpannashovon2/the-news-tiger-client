// import React from 'react';
import first from '../../../../assets/1.png'
import second from '../../../../assets/2.png'
import third from '../../../../assets/3.png'
import { Card, CardGroup } from "react-bootstrap";

const EditorInsiteNews = () => {
    return (
        <CardGroup className="mt-3 d-flex gap-4">
            <Card border="warning" >
                <Card.Header>Header</Card.Header>
                <Card.Img variant="top" className="p-3" src={first} />
                <Card.Body>
                    <Card.Title>Warning Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the  content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="warning" >
                <Card.Header>Header</Card.Header>
                <Card.Img variant="top" className="p-3" src={third} />
                <Card.Body>
                    <Card.Title>Warning Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the  content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="warning" >
                <Card.Header>Header</Card.Header>
                <Card.Img variant="top" className="p-3" src={second} />
                <Card.Body>
                    <Card.Title>Warning Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the  content.
                    </Card.Text>
                </Card.Body>
            </Card>

        </CardGroup>
    );
};

export default EditorInsiteNews;