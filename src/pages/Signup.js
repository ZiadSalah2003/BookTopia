import React from 'react'
import './Sign.css';
import {Link} from "react-router-dom";

function Signup () {
    return (
            <div className='wrapper mt-5'>
            <form >
                <h1>sign up</h1>
                <div className="input-box">
                    <input type="text" placeholder='UserName' required/>
                </div>

                <div className="input-box">
                    <input type="email" placeholder='Email' required/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder='Confirm Password' required/>
                </div>

                <button className="btn btn-secondary" type="submit">Register</button>
                <div className="register-link">
                    <p>Have an Account? <Link to="/Login">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Signup;