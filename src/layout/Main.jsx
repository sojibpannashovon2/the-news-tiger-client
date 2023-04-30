// import React from 'react';

import Header from '../pages/shared/Header';
import Footer from '../pages/shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/shared/LeftNav.jsx/LeftNav';
import RightNav from '../pages/shared/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>

                <Row>
                    <Col lg={3} >
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6} >
                        <h1>main part</h1>
                    </Col>
                    <Col lg={3} >
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;