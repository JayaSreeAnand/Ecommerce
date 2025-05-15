import React from 'react';
import './WhyGantham.css';

function WhyGantham() {
  return (
    <section className="why-gantham-section">
      <div className="why-gantham-image-container">
        <img src="/images/whygantham.jpg" alt="Why Gantham" className="why-gantham-image" />
      </div>
      <div className="why-gantham-content">
        <h5 className="why-gantham-subtitle">WHY GANTHAM</h5>
        <h2 className="why-gantham-title">A different approach to cook rice.</h2>
        <p className="why-gantham-description">
          The traditional method / draining method of cooking rice, colloquially called Vadicha sadam is the best method of cooking rice because it delivers fluffy, non-sticky, aromatic and Low GI rice.
        </p>
      </div>
    </section>
  );
}

export default WhyGantham;
