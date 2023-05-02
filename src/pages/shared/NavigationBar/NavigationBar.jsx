// import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserSecret } from "react-icons/fa";
import { useContext } from 'react';
import { authContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(authContext);
    const handleLogoutButton = () => {
        logOut()
            .then(() => {
                alert("Sign-Out Successfully")
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <Container>
            <Navbar className='my-3 shadow-lg border border-secondary' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto text-dark fw-bold">
                            <Nav.Link href="#features">
                                <Link to="/catagory/0">Home</Link>
                            </Nav.Link>
                            {/* <Nav.Link href="#pricing">
                                <Link to='/about'>About</Link>
                            </Nav.Link> */}
                            <Nav.Link href="#pricing">Career</Nav.Link>
                            <Nav.Link href="#pricing">
                                <Link to="/login">
                                    <Button variant="secondary">Log-In</Button>
                                </Link>
                            </Nav.Link>

                        </Nav>
                        <Nav className='d-flex justify-content-center align-items-center fw-bold'>
                            {
                                user && <Nav.Link href="#deets"><FaUserSecret style={{ fontSize: "2rem" }}></FaUserSecret></Nav.Link>
                            }
                            {/* <Nav.Link eventKey={2} href="#memes"> */}
                            {
                                user ? <><span>{user.email}</span><Button variant="secondary" onClick={handleLogoutButton}>Log-Out</Button></> :

                                    <Link to="/login">

                                        <Button variant="secondary">Log-In</Button>
                                    </Link>
                            }

                            {
                                user && <p> <img style={{ height: "50px", width: "50px" }} src={user.photoURL} alt="" /></p>
                            }



                            {/* </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;