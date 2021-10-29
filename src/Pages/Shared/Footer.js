import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <NavLink to='/' className="navlink">Ace Holidays</NavLink>

                <NavLink to='/' className="navlink">About Us</NavLink>
                <NavLink to='/' className="navlink">Contact Us</NavLink>
            </div>
            <div>
                <NavLink to='/' className="navlink">Why you Choose Us</NavLink>
                <NavLink to='/' className="navlink">Our achievments</NavLink>
                <NavLink to='/' className="navlink">Help and Support</NavLink>

            </div>
            <div>
                <NavLink to='/' className="navlink">Terms</NavLink>
                <NavLink to='/' className="navlink">Privacy Policy</NavLink>
                <NavLink to='/' className="navlink">Sitemap</NavLink>
            </div>
        </div>
    );
};

export default Footer;