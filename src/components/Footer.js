import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <h3>G a n t h a m</h3>
        <p>
          Email: <a href="mailto:mail2gantham@gmail.com">mail2gantham@gmail.com</a>
        </p>
        <p>
          S-2, 2nd floor, Peacock apartments, 1&amp;2<br />
          Bharathi nagar, Chandrasekar nagar extn.,<br />
          Thoraipakkam, Chennai 600097
        </p>
        <p>© 2024 by Gantham.</p>
      </div>
      <div className="footer-right">
        <h3>Feedback</h3>
        <p>20 seconds or less. Your response is very valuable to us. Drop in your mail id for an quick</p>
        <form className="feedback-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email *" required />
          <button type="submit">Feedback</button>
        </form>
        <div className="social-icons">
          <a href="https://www.youtube.com/channel/UCSd87I4DqqU7qH1EqEmOW9A" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="youtube-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FF0000" viewBox="0 0 24 24">
              <path d="M23.498 6.186a2.997 2.997 0 0 0-2.11-2.12C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.388.566a2.997 2.997 0 0 0-2.11 2.12A31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .502 5.814 2.997 2.997 0 0 0 2.11 2.12C4.4 20.5 12 20.5 12 20.5s7.6 0 9.388-.566a2.997 2.997 0 0 0 2.11-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/gantham/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="linkedin-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 24 24">
              <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.64 1.34 2.98 2.98 2.98 1.64 0 2.98-1.34 2.98-2.98 0-1.64-1.34-2.98-2.98-2.98zM2.4 8.98h5.16v12.02H2.4V8.98zM9.5 8.98h4.94v1.64h.07c.69-1.3 2.37-2.67 4.88-2.67 5.22 0 6.18 3.44 6.18 7.91v8.14h-5.16v-7.21c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.88-2.77 3.81v7.33H9.5V8.98z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
