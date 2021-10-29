import React from 'react';
import './Home.css'
import Services from './Services/Services';

const Home = () => {
    return (
        <div>

            {/* banner section */}
            <div className="banner">

            </div>
            <div className="banner-text">
                <h2>EXPLORE THE WORLD</h2>
                <p>Travel with us. We are commited to give you the best services.</p>
                <button>Learn More</button>
            </div>

            {/* services section */}
            <Services></Services>




            {/* bonus section 1 */}
            <div className="offer">

                <h3>EXCLUSIVE OFFER</h3>
                <h2>GET 30% OFF YOUR FIRST TRIP</h2>
                <p>We are giving 30% discount for your first trip with us. You can grave this offer and enjoy the trip.</p>
                <button>View Packages</button>
            </div>


            {/* bonus section 2 */}

            <div className="hear container">
                <div className="hearTitle w-50">
                    <h2>WE LOVE TO HEAR FROM YOU </h2>
                    <h3>Share your opinion about us. How was your trip with our packages? </h3>
                </div>

                <div className="hearDetails w-50">
                    <p>Really good travel writing inspires us to get up, go out and see the world. It can be just as persuasive as an awe-inspiring photograph or an enthusiastic word-of-mouth endorsement from a close friend.</p>

                    <p>For most trips, airfare is the most expensive part of the trip. While prices for transatlantic flights have gone down in recent years, they can still put a sizeable dent in any travel budget. Whether you’re a budget solo traveler or a family looking to vacation abroad, finding a cheap flight deal can be what makes or breaks your trip.

                        After all, if your flight is too expensive, you’re likely going to keep putting the trip off. I’ve seen it happen time and time again.</p>
                </div>
            </div>



        </div>
    );
};

export default Home;