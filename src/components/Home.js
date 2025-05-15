import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './HeroSection';
import Vision from './Vision';
import ProductList from './ProductList';
import Features from './Features';
import WhyGantham from './WhyGantham';
import FAQ from './FAQ';
import Cart from './Cart';
import Footer from './Footer';

function Home() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('light');
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [userInfo] = useState(null);

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      document.body.className = newTheme === 'light' ? 'light-theme' : 'dark-theme';
      return newTheme;
    });
  };

  const toggleCart = () => {
    setCartVisible(prev => !prev);
  };

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      } else {
        return [...prevItems, product];
      }
    });
    setCartVisible(true);
  };

  const handleQuantityChange = (product, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === product.id ? { ...item, quantity } : item
      )
    );
  };

  const handleProceedToPayment = () => {
    setCartVisible(false);
    if (!userInfo) {
      navigate('/login', { state: { from: '/payment', cartItems } });
    } else {
      navigate('/payment', { state: { userInfo, cartItems } });
    }
  };

  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <HeroSection />
      <Vision />
      <ProductList addToCart={addToCart} />
      <Features addToCart={addToCart} />
      <WhyGantham />
      <FAQ />
      <Footer />

      {cartVisible && (
        <Cart
          cartItems={cartItems}
          onClose={toggleCart}
          onQuantityChange={handleQuantityChange}
          onProceedToPayment={handleProceedToPayment}
        />
      )}
    </div>
  );
}

export default Home;
