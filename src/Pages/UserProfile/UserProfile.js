import React from 'react';
import useAuth from '../../hooks/useAuth';
import './UserProfile.css'

const UserProfile = () => {
    const { user } = useAuth();
    return (
        <div className="userProfile">
            <img src={user?.photoURL} alt="" />
            <h2 className="my-5">Hello Mr. <span>{user?.displayName}</span></h2>

            <p><small>User Dashboard coming soon...</small></p>
        </div>
    );
};

export default UserProfile;