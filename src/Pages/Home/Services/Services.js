import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://sheltered-forest-11822.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(true);
            })
    }, []);

    // spinner
    // const { isLoading } = useAuth();
    // if (isLoading) {
    //     return <div className="services-contents mt-5"><Spinner animation="grow" variant="primary" /></div>
    // }

    return (
        <>
            <h2 id="services-title">TRAVEL <span id='packages'>PACKAGES</span></h2>
            {loading ?
                <div className="my-5 container services-contents" >

                    {
                        services.map(service =>
                            <div className="allServices" key={service?._id}>
                                <div className="singleService">
                                    <div className="serviceImg">
                                        <img src={service?.img} alt="" />
                                    </div>
                                    <div className="serviceText">
                                        <h2>{service.name} <span>{service?.price}$</span></h2>
                                        <p>{service?.desc}</p>


                                        <Link to={`/singleService/${service?._id}`}>
                                            <button>Book Now</button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                : <div className='travelSpin'>
                    <Spinner animation="border" variant="primary" />
                </div>
            }
        </>
    );
};
export default Services;