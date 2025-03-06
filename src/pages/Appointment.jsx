import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Pagescss/Appointment.css';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container">
        <h1>Appointment Confirmed</h1>
        <p>Thank you, {formData.name}!</p>
        <p>
          Your appointment for <strong>{formData.service}</strong> is scheduled for {formData.date} at {formData.time}.
        </p>
        <p>A confirmation has been sent to {formData.email}.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Book Your Appointment</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="formGroup">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="formGroup">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="formGroup">
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="formGroup">
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="formGroup">
          <label>Time:</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div className="formGroup">
          <label>Service I Offer:</label>
          <select name="service" value={formData.service} onChange={handleChange} required>
            <option value="">Select a service</option>
            <option value="Dental Cleaning">Dental Cleaning</option>
            <option value="Teeth Whitening">Teeth Whitening</option>
            <option value="Orthodontics">Orthodontics</option>
            <option value="Fillings & Restorations">Fillings & Restorations</option>
          </select>
        </div>
        <button type="submit" className="button">Submit Appointment</button>
      </form>
    </div>
  );
};

export default Appointment;
