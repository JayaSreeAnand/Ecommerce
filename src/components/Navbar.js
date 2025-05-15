import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ toggleTheme, currentTheme, toggleCart }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo-link">Gantham</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <div className="navbar-actions">
        <button className="icon-button" onClick={toggleCart} aria-label="Cart">
          🛒
        </button>
        <button className="icon-button" onClick={toggleTheme} aria-label="Toggle Theme">
          {currentTheme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
