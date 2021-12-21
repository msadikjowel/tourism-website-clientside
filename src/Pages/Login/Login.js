import React from 'react';
import './Login.css'
import loginicon from './../../images/login-icon.png'
import { Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { signInUsingGoogle, setUser } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user)
                history.push(redirect_uri);
            })
    }

    const handleLogin = () => {
        alert('This function still on beta testing. Try Google sign in please.')
    }
    return (
        <div>
            <div className="login">

            </div>
            <div className="login-contents">
                <div className="login-div">
                    <div className="login-img">
                        <img src={loginicon} alt="" />
                    </div>
                    <div className="login-form">
                        <h2>User Login</h2>
                        <Form>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Control type="pass" placeholder="Enter password" />
                        </Form>

                        <button id="loginButton" onClick={handleLogin}>Login</button> <br />
                        {/* <h3>or</h3> */}
                        <button onClick={handleGoogleLogin}>Login with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;