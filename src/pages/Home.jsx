import React from 'react';
import { Link } from 'react-router-dom';
import '../Pagescss/Home.css';

const Home = () => {
  return (
    <div className="homeContainer">
      <h1>Welcome to Our Dental Clinic</h1>
      <p>Your smile is our priority.</p>
      <Link to="/appointment">
        <button className="bookButton">Book Now</button>
      </Link>
    </div>
  );
};

export default Home;
