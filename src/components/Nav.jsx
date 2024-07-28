import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const NavBar = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/about" activeclassname="active">About</NavLink>
        </li>
        <li>
          <NavLink to="/" activeclassname="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact/Contact" activeclassname="active">Contact</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
