import React from 'react';
import './OurServices.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faBullhorn, faHotel, faUtensils, faHiking } from '@fortawesome/free-solid-svg-icons';

const plane = <FontAwesomeIcon icon={faPlane} />
const horn = <FontAwesomeIcon icon={faBullhorn} />
const hotel = <FontAwesomeIcon icon={faHotel} />
const food = <FontAwesomeIcon icon={faUtensils} />
const adventure = <FontAwesomeIcon icon={faHiking} />


const OurServices = () => {
    return (
        <div className='container' id='services'>
            <h2 className='text-center fw-bold serviceTitle'>SERVICES</h2>
            <div className="servicesContainer">

                <div className='services'>
                    <span>{plane}</span>
                    <h4>Fastest Travel</h4>
                    <p>We are giving fastest travel anytime around the world.</p>
                </div>
                <div className='services'>
                    <span>{horn}</span>
                    <h4>Safety Guide</h4>
                    <p>We ensure to our tourist with more safety guide.</p>
                </div>

                <div className='services'>
                    <span>{hotel}</span>
                    <h4>Affordable Hotels</h4>
                    <p>We offer our tourists all the safe and affordable cost hotel.</p>
                </div>

                <div className='services'>
                    <span>{food}</span>
                    <h4>Hygienic Food</h4>
                    <p>We are always committed to serve with hygienic food.</p>
                </div>

                <div className='services'>
                    <span>{adventure}</span>
                    <h4>Adventures</h4>
                    <p>We also offer adventures like hiking, paragliding, and more.</p>
                </div>

            </div>
        </div>
    );
};

export default OurServices;