import React, { useState } from 'react';
import axios from 'axios';
import './Sign.css';
import { Link } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:5000/login', user);
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>login</h1>
        <div className="input-box">
          <input type="email" name="email" placeholder='Email' required onChange={handleChange} />
        </div>
        <div className="input-box">
          <input type="password" name="password" placeholder='Password' required onChange={handleChange} />
        </div>
        <button className="btn btn-secondary" type="submit">Login</button>
        <div className="register-link">
          <p>Don't Have an Account? <Link to="/SignUp">Register</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;