import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    pincode: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation can be added here
    const redirectPath = location.state?.from || '/payment';
    const cartItems = location.state?.cartItems || [];
    navigate(redirectPath, { state: { userInfo: formData, cartItems } });
  };

  return (
    <div className="login-container">
      <h1>Login / Shipping Information</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <textarea name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Pincode:
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
        </label>
        <button type="submit">Proceed to Payment</button>
      </form>
    </div>
  );
}

export default Login;
