import React from 'react';
import { useForm } from "react-hook-form";

import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './SingleService.css'

const SingleService = () => {
    const { user } = useAuth();
    const { id } = useParams();

    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://sheltered-forest-11822.herokuapp.com/singleService/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    // react hook
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        data.serviceName = service?.name;
        data.price = service?.price;
        data.status = 'pending';

        fetch(`https://sheltered-forest-11822.herokuapp.com/confirmBooking`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {

                alert('Booking Confirmed Successfully!');
                reset();
            })
    };


    return (
        <div className="bookingConfirm">
            <div className="bookingService">
                <h2 className="mt-5">{service?.name}</h2>
                <img className="img-fluid" src={service?.img} alt="" />
                <p className="w-50">{service?.desc}</p>
            </div>

            <div className="bookingInformation">
                <h2>Booking Information</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email")} defaultValue={user?.email} /> <br />

                    <input {...register("fullName", { required: true, maxLength: 20 })} placeholder="Full name" /> <br />


                    <input type="number" {...register("phone", { required: true })} placeholder="Phone number" /> <br />

                    <input {...register("address")} placeholder="Address" /> <br />

                    {/* <input {...register("price", { required: true })} defaultValue={service?.price} /> <br /> */}

                    {errors.phone && <span>Required field can't be empty</span>} <br />

                    <input id="confirmBtn" type="submit" value="Confirm Booking" />
                </form>
            </div>
        </div>
    );
};

export default SingleService;