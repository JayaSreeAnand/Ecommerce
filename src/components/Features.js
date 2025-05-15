import React from 'react';
import './Features.css';

function Features() {
  return (
    <div className="features-section">
      <h1 className="features-heading">FEATURES</h1>
      <div className="features-list">
        <div className="feature-item">
          <img src="/images/Automatic.jpg" alt="Automatic" />
          <h3>AUTOMATIC</h3>
          <p>Fully automatic rice cooker for cooking raw, boiled and wild rice varities, top-rack dishwasher-safe for easy cleanup</p>
        </div>
        <div className="feature-item">
          <img src="/images/Power.jpg" alt="Energy Efficient" />
          <h3>ENERGY EFFECIENT</h3>
          <p>Reduced power consumption by 25%</p>
        </div>
        <div className="feature-item">
          <img src="/images/Fluffy.jpg" alt="Makes Fluffy and non sticky rice" />
          <h3>MAKES FLUFFY, NON STICKY RICE</h3>
          <p>Reduced glycemic index in cooked rice up to 30%*</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
