import React from 'react';
import '../Pagescss/About.css';

const About = () => {
  return (
    <div className="aboutContainer">
      <h1>About Us</h1>
      <div className="aboutContent">
        <div className="leftColumn">
          <h2>Who We Are</h2>
          <p>
            We are a private dental clinic dedicated to providing the highest
            quality dental care to our patients. Our experienced team of
            dentists and staff are committed to delivering personalized and
            compassionate treatment to help our patients achieve optimal oral
            health and beautiful smiles.
          </p>
        </div>
        <div className="rightColumn">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide exceptional dental care in a comfortable
            and welcoming environment. We strive to build long-lasting
            relationships with our patients and to empower them with the
            knowledge and tools to maintain healthy smiles for life.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li>Patient-centered care</li>
            <li>Compassion and empathy</li>
            <li>Professionalism and expertise</li>
            <li>Continuous learning and improvement</li>
            <li>Honesty and transparency</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
