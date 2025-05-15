import React from 'react';
import './Vision.css';

function Vision() {
  return (
    <section className="vision-section">
      <div className="vision-image-container">
        <img src="/images/Vision.JPG" alt="Our Vision" className="vision-image" />
      </div>
      <div className="vision-content">
        <h5 className="vision-subtitle">OUR VISION</h5>
        <h2 className="vision-title">At Gantham, we envision a world where cooking is effortless, enjoyable, and accessible to everyone.</h2>
        <p className="vision-description">
          Our mission is to innovate and deliver high-quality electric cookers that transform everyday cooking experiences.
        </p>
        <p className="vision-description">
          We are committed to sustainability, efficiency, and customer satisfaction, ensuring our products not only meet but exceed expectations.
        </p>
      </div>
    </section>
  );
}

export default Vision;
