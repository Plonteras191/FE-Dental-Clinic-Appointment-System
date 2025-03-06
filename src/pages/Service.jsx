import React from 'react';
import '../Pagescss/Service.css';

const Service = () => {
  const services = [
    { id: 1, name: 'Dental Cleaning', description: 'Clean and maintain your teeth for a healthy smile.' },
    { id: 2, name: 'Teeth Whitening', description: 'Brighten your smile with professional whitening.' },
    { id: 3, name: 'Orthodontics', description: 'Straighten your teeth with modern orthodontic solutions.' },
    { id: 4, name: 'Fillings & Restorations', description: 'Restore damaged teeth with high-quality fillings.' },
  ];

  return (
    <div className="container">
      <h1>Our Services</h1>
      <div className="serviceGrid">
        {services.map(service => (
          <div key={service.id} className="serviceBox">
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
