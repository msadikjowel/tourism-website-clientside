import React, { useEffect, useState } from 'react';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="my-5 container services-contents">
            <h2 id="services-title">TRAVEL <span>PACKAGES</span></h2>

            {
                services.map(service =>
                    <div className="allServices">
                        <div className="singleService">
                            <div className="serviceImg">
                                <img src={service.img} alt="" />
                            </div>
                            <div className="serviceText">
                                <h2>{service.name} <span>{service.price}$</span></h2>
                                <p>{service.desc}</p>
                                <button>Book Now</button>

                            </div>
                        </div>
                    </div>
                )
            }


        </div>
    );
};

export default Services;