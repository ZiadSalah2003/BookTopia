import React, { useState } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './AppNavbar.css';

const AppNavbar = () => {
  // Assuming you have some way to check the user's login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // Add this line

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout actions (clear authentication state, redirect, etc.)
    setIsLoggedIn(false);
    setUsername('');
    setIsAdmin(false); // Add this line
  };

  return (
    <Navbar style={{ backdropFilter: 'blur(50px)' }} expand="lg" className="m-4 rounded navbar">
      <NavLink to="/" className="m-2 mx-5 navbar-brand text-light">
        <span style={{ color: "#49525B" }}>Book</span><span style={{ color: "#F9391A" }}>Topia</span>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav " className="mx-3" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <NavItem>
            <NavLink to="/" className="ms-2 nav-link text-light">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" className="ms-2 nav-link text-light">About</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto">
          {isLoggedIn ? (
            <>
            <NavItem>
                <NavLink to="/" className="m-2 mx-2 nav-link text-light">Favourite</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" className="m-2 mx-2 nav-link text-light">Hello, {username}</NavLink>
              </NavItem>
              {isAdmin && (
      <NavItem>
        <NavLink to="/add" className="m-2 mx-2 nav-link text-light">Add</NavLink>
      </NavItem>
    )}
              <NavItem>
                <NavLink to="/" className="m-2 mx-2 nav-link text-light" onClick={handleLogout}>Logout</NavLink>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <NavLink to="/login" className="m-2 mx-2 nav-link text-light">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/signup" className="m-2 mx-2 nav-link text-light"><span>Sign up</span></NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
