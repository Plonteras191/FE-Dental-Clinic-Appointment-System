import React from 'react';
import '../Pagescss/PageStyles.css';


const Service = () => {
  return (
    <div className="container">
      <h1>Our Services</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>Dental Cleaning</li>
        <li>Teeth Whitening</li>
        <li>Orthodontics</li>
        <li>Fillings & Restorations</li>
      </ul>
    </div>
  );
};

export default Service;
