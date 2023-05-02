// import React from 'react';
import Header from '../pages/shared/Header';
import Footer from '../pages/shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';

import RightNav from '../pages/shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const NewaLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container className='my-5'>

                <Row>

                    <Col lg={9} >
                        <Outlet></Outlet>
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

export default NewaLayout;