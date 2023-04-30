// import React from 'react';
import moment from 'moment';
import logo from '../../../src/assets/logo.png'
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p ><small className='text-secondary'>Journalism Without Fear or Favour</small></p>
                <p className='font-bold'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <Button variant="danger">Latest </Button>
                <p className='mt-3'><Marquee className='text-danger' speed={50}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee></p>
            </div>
        </Container>
    );
};

export default Header;