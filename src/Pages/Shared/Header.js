import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
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
                            <div className="my-auto headerMy">
                                <NavLink className="headerLink" activeClassName="headerLinkSelected" to='/home'>Home</NavLink>

                                <NavLink className="headerLink" activeClassName="headerLinkSelected" to='/shop'>My Booking</NavLink>
                                <NavLink className="headerLink" activeClassName="headerLinkSelected" to='/map'>Manage Bookings</NavLink>
                                <NavLink className="headerLink" activeClassName="headerLinkSelected" to='/gap'>Add a Property</NavLink>
                            </div>

                            <div className="mx-auto">
                                <NavLink to="/profile">
                                    <img className="profileImg" src="https://www.wallpapertip.com/wmimgs/30-308464_cool-profile-pictures-1080p.jpg" alt="" />
                                </NavLink>

                                <NavLink className="headerLink" activeClassName="headerLinkSelected" to='/profile'>Hello</NavLink>


                                <button className="headerBtn">Login</button>
                                <button className="headerBtn">Logout</button>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;