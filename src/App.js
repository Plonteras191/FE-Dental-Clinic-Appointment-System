import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Location from './pages/Location';
import Service from './pages/Service';
import Appointment from './pages/Appointment';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="pageContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/service" element={<Service />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
