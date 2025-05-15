import React from 'react';
import './Cart.css';

function Cart({ cartItems = [], onClose, onQuantityChange, onProceedToPayment }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const gstAmount = totalPrice * 0.18; // 18% GST
  const totalWithGst = totalPrice + gstAmount;

  const handleDecrease = (item) => {
    const newQuantity = item.quantity - 1;
    if (newQuantity >= 0) {
      onQuantityChange(item, newQuantity);
    }
  };

  const handleIncrease = (item) => {
    onQuantityChange(item, item.quantity + 1);
  };

  const handleShowNow = () => {
    onClose();
    const productListSection = document.getElementById('product-list-section');
    if (productListSection) {
      productListSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-popup slide-in-right">
        <div className="cart-popup-content">
          <button className="close-btn" onClick={onClose}>×</button>
          <h2>Your cart is empty!</h2>
          <button className="shop-now-btn" onClick={handleShowNow}>SHOP NOW</button>
          <p>FREE 1-year warranty on all products</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-popup slide-in-right">
      <div className="cart-popup-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Your Cart</h2>
        <div className="cart-items-scroll">
          {cartItems
            .filter(item => item.quantity > 0)
            .map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.images ? item.images[0] : item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>Price: Rs. {item.price.toFixed(2)}</p>
                  <div className="quantity-control">
                    <button className="quantity-btn" onClick={() => handleDecrease(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="quantity-btn" onClick={() => handleIncrease(item)}>+</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="cart-total">
          <h3>Subtotal: Rs. {totalPrice.toFixed(2)}</h3>
          <h3>GST (18%): Rs. {gstAmount.toFixed(2)}</h3>
          <h3>Total: Rs. {totalWithGst.toFixed(2)}</h3>
          <button className="checkout-btn" onClick={onProceedToPayment}>
            Proceed to Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
