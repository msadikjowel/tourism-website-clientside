import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" className="header" >
                <Container>

                    <NavLink id="headerTitle" to="/home">Ace Holidays</NavLink>
                    <Navbar.Toggle className="toggle" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                        </Nav>
                        <Nav className="">
                            {user.email ? <div className=" ">
                                <div className="my-auto headerMy">

                                    <NavLink className="headerLink" activeClassName="headerLinkSelected" to='/home'>Home</NavLink>
                                    <NavLink className="headerLink" activeClassName="headerLinkSelected" to='/myBooking'>My Booking</NavLink>
                                    <NavLink className="headerLink" activeClassName="headerLinkSelected" to='/manageBooking'>Manage Bookings</NavLink>
                                    <NavLink className="headerLink" activeClassName="headerLinkSelected" to='/addService'>Add a Service</NavLink>

                                    <NavLink to="/profile">
                                        <img className="profileImg" src={user?.photoURL} alt="" />
                                    </NavLink>

                                    <NavLink className="headerLink" activeClassName="headerLinkSelected" to='/profile'>{user?.displayName}</NavLink>
                                    <button className="headerBtn" onClick={logOut}>Logout</button>



                                </div>
                            </div> :
                                <NavLink to='/login'>
                                    <button className="headerBtn">Login</button>
                                </NavLink>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;