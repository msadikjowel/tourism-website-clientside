import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Spinner, Table } from 'react-bootstrap';
import './ManageBooking.css'


// fontawesome
const update = <FontAwesomeIcon icon={faCheck} />
const del = <FontAwesomeIcon icon={faTrashAlt} />

const ManageBookings = () => {

    const [allBookings, setAllBookings] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`https://sheltered-forest-11822.herokuapp.com/allBookings`)
            .then(res => res.json())
            .then(data => {
                setAllBookings(data);
                setLoading(true);
            })
    }, [allBookings]);


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
                        const rest = allBookings.filter(booking => booking._id !== id);
                        setAllBookings(rest);
                    }
                })
        }
    }


    // update
    const handleUpdateBooking = id => {
        fetch(`https://sheltered-forest-11822.herokuapp.com/updateBooking/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(allBookings)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // console.log(data)
                    alert('Booking Approved Successfully!');
                }
            })
    }


    return (
        <div className="container booking-container">
            <h2 className="myBooking">Admin Dashboard</h2>

            {loading ?

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
                            allBookings.map((booking, index) =>
                                <tr key={booking?._id}>
                                    <td>{index + 1}</td>
                                    <td>{booking?.serviceName}</td>
                                    <td>${booking?.price}</td>
                                    <td>{booking?.fullName}</td>
                                    <td>{booking?.email}</td>
                                    <td>{booking?.phone}</td>
                                    <td>{booking?.address}</td>
                                    <td>{booking?.status}</td>
                                    <td><button title="Approve" onClick={() => handleUpdateBooking(booking?._id)}>{update}</button> <button title="Delete" onClick={() => handleDeleteBooking(booking?._id)}>{del}</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </Table>
                : <div className='bookingSpin'>
                    <Spinner animation="border" variant="primary" />
                </div>
            }
        </div>
    );
};

export default ManageBookings;