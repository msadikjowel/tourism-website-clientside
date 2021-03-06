import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import OurServices from './OurServices/OurServices';
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
            <div className="offer" id='offer'>

                <h3>EXCLUSIVE OFFER</h3>
                <h2>GET 30% OFF YOUR FIRST TRIP</h2>
                <p>We are giving 30% discount for your first trip with us. You can grave this offer and enjoy the trip.</p>
                <Link to='/packages'><button>View Packages</button></Link>
            </div>


            {/* bonus section 2 */}

            <div className="hear">
                <div className="hearTitle">
                    <h2>WE LOVE TO HEAR FROM YOU </h2>
                    <h3>Share your opinion about us. How was your trip with our packages? </h3>
                </div>

                <div className="hearDetails">
                    <p>Really good travel writing inspires us to get up, go out and see the world. It can be just as persuasive as an awe-inspiring photograph or an enthusiastic word-of-mouth endorsement from a close friend.</p>

                    <p>For most trips, airfare is the most expensive part of the trip. While prices for transatlantic flights have gone down in recent years, they can still put a sizeable dent in any travel budget. Whether you’re a budget solo traveler or a family looking to vacation abroad, finding a cheap flight deal can be what makes or breaks your trip.

                        After all, if your flight is too expensive, you’re likely going to keep putting the trip off. I’ve seen it happen time and time again.</p>
                </div>
            </div>

            <OurServices></OurServices>


            {/* bonus section 3 */}
            <div className="subscribe-container" id='subscribe'>
                <h2>Subscribe to Ace Holidays Pass</h2>
                <h3>Features</h3>

                <div className="features-container">
                    <div className="feature1">
                        <ul>
                            <li>More than one million trips with no nightly rates, taxes, or fees.</li>
                            <li>Hold multiple Pass reservations at the same time.
                            </li>
                            <li>When you can't travel, use your Pass for lifestyle merchandise and local experiences.
                            </li>
                            <li>Flexible cancellation policy if your plans change.
                            </li>
                        </ul>
                    </div>
                    <div className="feature2">
                        <ul>
                            <li>Includes Club subscription at preferred pricing with additional booking access and benefits.
                            </li>
                            <li>First-class personalized Inspirato service on every trip.
                            </li>
                            <li>Sharing plans available to let your family and friends take trips of their own.
                            </li>
                            <li>No long-term commitment; cancel your subscription at any time.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Home;