import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './header.css'

const Header = () => {
    const { user,logOutUser } = useAuth();
    return (
            <Navbar id="nav-container" expand="lg">
                <Container fluid>
                    <NavLink className="nav-logo" to="/">Organic Toys</NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 links-container"
                    >
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/toys">All Toys</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/about">About</NavLink>
                        {/* <NavLink to="/cart">Cart <i class="fas fa-shopping-cart"></i></NavLink> */}
                        {
                            user && <NavLink to="/dashboard">Dashboard</NavLink>
                        }
                        {
                            user && <a>{user.displayName}</a>
                        }
                        {
                            user ? <button onClick={logOutUser} className="btn btn-danger">Logout</button> : <NavLink to="/login">Login</NavLink>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;