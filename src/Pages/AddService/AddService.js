import React from 'react';
import { useForm } from "react-hook-form";

import './AddService.css'

const AddService = () => {
    // react hook
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {



        fetch(`http://localhost:5000/addService`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {

                alert('Service Added Successfully!');
                reset();
            })
    };
    return (
        <div className="addService">
            <div className="addService-banner">

            </div>
            <div className="addService-text">



                <h2 className="">Add a Service</h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Service name" /> <br />



                    <input {...register("img", { required: true })} placeholder="Image URL" /> <br />

                    <input type="number" {...register("price", { required: true })} placeholder="$ Price" /> <br />

                    <textarea {...register("desc", { required: true })} placeholder="Service description" /> <br />

                    {errors.img && <span>Required field can't be empty</span>} <br />

                    <input id="addServiceBtn" type="submit" value="Add Service" />
                </form>
            </div>
        </div>
    );
};

export default AddService;