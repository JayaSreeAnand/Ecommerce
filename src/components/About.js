import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section">
      <h1 className="about-heading">OUR JOURNEY</h1>
      <p className="about-text">
        The need of right cooking method in a best cooking device especially among people living away from home is where the journey started.
      </p>

      <h2 className="about-mission-title">OUR MISSION</h2>
      <h3 className="about-mission-subtitle">Redefining the Way <br />We Cook</h3>
      <p className="about-mission-text">
        Rapid modernization and development over the past few decades pushes people to adapt to various lifestyle changes.
      </p>
      <p className="about-mission-text">
        However, there has been always a need among people for better cooking to cook rice. We envision providing a solution to this need with a product.
      </p>
      <p className="about-mission-text">
        We are what we eat!
      </p>
      <p className="about-mission-text">
        A kitchen with the right cooking devices and products makes life more valuable.
      </p>

      {/* Image is not provided, so skipping image rendering */}
      {/* Existing content above */}

      <section className="about-timeline-section">
        <h2 className="timeline-heading">Our Journey So Far</h2>
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-year">2020</div>
            <div className="timeline-subtitle">GANTHAM IS FOUNDED</div>
            <div className="timeline-description">
              காந்தம் / gantham simply means magnet. We intend to attract people with values. <br></br>The values are hidden in the product in the form of innovation.<br></br> The values which we propose improve the quality of life.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2021</div>
            <div className="timeline-subtitle">GROUNDBREAKING VALVE TECHNOLOGY DEVELOPED</div>
            <div className="timeline-description">
              Automating draining reduces the effort of humans in cooking rice through this method, <br></br> which gives an opportunity to people who are in need of this method.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2022</div>
            <div className="timeline-subtitle">PATENTED DRAIN TECHNOLOGY</div>
            <div className="timeline-description">
              Validated and tested drainn technology focusing on convinence and handling.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2023</div>
            <div className="timeline-subtitle">PRODUCT LAUNCH</div>
            <div className="timeline-description">
              Official launch of the product in the market with marketing and sales efforts
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;
