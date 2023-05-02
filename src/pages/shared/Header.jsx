// import React from 'react';
import moment from 'moment';
import logo from '../../../src/assets/logo.png'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../../providers/AuthProvider';
import { FaUserSecret } from "react-icons/fa";

const Header = () => {

    const { user2 } = useContext(authContext)
    // console.log(name);
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p ><small className='text-secondary'>Journalism Without Fear or Favour</small></p>
                <p className='font-bold'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <Button variant="danger">Latest </Button>
                <div className=''><Marquee className='text-danger' speed={50}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee></div>
            </div>


            <Navbar className='my-3 shadow-lg border border-secondary' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto text-dark fw-bold">
                            <Nav.Link href="#features">
                                <Link to="/">Home</Link>
                            </Nav.Link>

                            <Nav.Link href="#pricing">Career</Nav.Link>
                            <Nav.Link href="#pricing">
                                <Link to="/login">
                                    <Button variant="secondary">Log-In</Button>
                                </Link>
                            </Nav.Link>

                        </Nav>
                        <Nav className='d-flex justify-content-center align-items-center fw-bold'>
                            {
                                user2 && <Nav.Link href="#deets"><FaUserSecret style={{ fontSize: "2rem" }}></FaUserSecret></Nav.Link>
                            }
                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user2 ? <Button variant="secondary">Log-Out</Button> :

                                        <Link to="/login">
                                            <Button variant="secondary">Log-In</Button>
                                        </Link>
                                }


                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;