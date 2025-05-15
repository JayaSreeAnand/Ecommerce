import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section" style={{ backgroundColor: '#f0f0f0', padding: '8rem 0 4rem 0', textAlign: 'center' }}>
      <div className="hero-content" style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h1 className="animated-heading" style={{ fontSize: '4rem', fontWeight: '700', letterSpacing: '0.1em', marginBottom: '1rem', fontFamily: "'Arial Black', Gadget, sans-serif" }}>
          THE FUTURE  COOKING IS HERE!
        </h1>
        <p style={{ fontSize: '1.5rem', fontWeight: '400', color: '#333', marginBottom: '2rem', fontFamily: "'Georgia', serif" }}>
          Discover the smartest, simplest rice cooker with Gantham
        </p>
        <img src="/images/Main.JPG" alt="Main" className="hero-image" style={{ borderRadius: '20px', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }} />
      </div>
    </section>
  );
}

export default HeroSection;
