import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Componentscss/Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        About
      </NavLink>
      <NavLink
        to="/location"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Location
      </NavLink>
      <NavLink
        to="/service"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Service
      </NavLink>
    </nav>
  );
};

export default Navigation;
