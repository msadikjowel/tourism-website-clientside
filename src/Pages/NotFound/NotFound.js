import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
            <div className="notfound">

            </div>
            <div className="notfound-text">

                <Link to='/home'><button>GO HOME</button></Link>
            </div>
        </div>
    );
};

export default NotFound;