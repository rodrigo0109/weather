import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid link_container">
          <NavLink className='link' to='/'>Home</NavLink>
          <NavLink className='link' to='/cities'>My cities</NavLink>
          <a className='link' target="_blank" href='https://linkedin.com/in/rodrigo-perez-54073314b' rel="noopener noreferrer">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
