import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyBooking.css'

// font awesome icon
// const update = <FontAwesomeIcon icon={faCheck} />
const del = <FontAwesomeIcon icon={faTrashAlt} />

const MyBooking = () => {
    const { user } = useAuth();
    const email = user?.email;

    const [myBookings, setMyBookings] = useState([]);

    useEffect(() => {
        fetch(`https://sheltered-forest-11822.herokuapp.com/myBooking/${email}`)
            .then(res => res.json())
            .then(data => setMyBookings(data))
    }, []);


    // delete a booking
    const handleDeleteBooking = id => {
        const proceedDelete = window.confirm('Are you sure to delete your booking?')
        if (proceedDelete) {
            fetch(`https://sheltered-forest-11822.herokuapp.com/confirmBooking/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted!');
                        const rest = myBookings.filter(booking => booking._id !== id);
                        setMyBookings(rest);
                    }
                })
        }
    }


    return (
        <div className="container booking-container">
            <h2 className="myBooking">My Booking</h2>

            <Table responsive striped bordered hover id="table-contents">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Service Name</th>
                        <th>Price</th>
                        <th>Customer Name</th>
                        <th>Customer Email</th>
                        <th>Customer Phone</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myBookings.map((booking, index) =>
                            <tr key={booking?._id}>
                                <td>{index + 1}</td>
                                <td>{booking?.serviceName}</td>
                                <td>${booking?.price}</td>
                                <td>{booking?.fullName}</td>
                                <td>{booking?.email}</td>
                                <td>{booking?.phone}</td>
                                <td>{booking?.address}</td>
                                <td>{booking?.status}</td>
                                <td><button title="Delete" onClick={() => handleDeleteBooking(booking?._id)}>{del}</button></td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>

        </div>
    );
};

export default MyBooking;