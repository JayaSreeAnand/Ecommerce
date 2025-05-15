import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Payment.css';

function Payment() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });

  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPaymentInfo(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { cardNumber, cardHolder, expiryDate, cvv } = paymentInfo;
    if (!cardNumber || !cardHolder || !expiryDate || !cvv) {
      alert('Please fill all card details');
      return;
    }
    setShowSuccess(true);
  };

  const closeSuccessPopup = () => {
    setShowSuccess(false);
    const dummyUserInfo = {
      name: 'Anand',
      address: '4/123, Sivan kovil Street, Erachakulam, Nagercoil, Tamil Nadu',
      email: 'sanand336@gmail.com',
      phone: '9500409691',
      pincode: '629901'
    };
    navigate('/order-confirmation', { state: { userInfo: dummyUserInfo, cartItems, paymentInfo } });
  };

  return (
    <div className="payment-container">
      <h1>Payment Details</h1>
      <form className="card-detail-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Enter Your Card Details</h2>
        <div className="card-logo">
          <img src="/images/visa-logo.png" alt="Visa Logo" />
        </div>

        <label htmlFor="cardNumber" className="label">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          maxLength="19"
          placeholder="1234 1234 1234 1234"
          value={paymentInfo.cardNumber}
          onChange={handleChange}
          className="input card-number-input"
        />

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cardHolder" className="label">Card Holder</label>
            <input
              type="text"
              id="cardHolder"
              placeholder="ISRAEL ISRAELI"
              value={paymentInfo.cardHolder}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="expiryDate" className="label">Exp. Date</label>
            <input
              type="text"
              id="expiryDate"
              maxLength="5"
              placeholder="10/25"
              value={paymentInfo.expiryDate}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cvv" className="label">CCV</label>
            <input
              type="password"
              id="cvv"
              maxLength="3"
              placeholder="123"
              value={paymentInfo.cvv}
              onChange={handleChange}
              className="input"
            />
          </div>
        </div>

        <button
          type="submit"
          className="place-order-button"
        >
          Place Order
        </button>
      </form>

      {showSuccess && (
        <div className="success-popup" onClick={closeSuccessPopup}>
          <div className="success-content" onClick={e => e.stopPropagation()}>
            <h2>Success!</h2>
            <p>You successfully placed the order.</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeSuccessPopup();
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
