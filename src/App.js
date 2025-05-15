import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Payment from './components/Payment';
import OrderConfirmation from './components/OrderConfirmation';
import About from './components/About';

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    document.body.className = currentTheme;
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} currentTheme={currentTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
    </>
  );
}

export default App;
