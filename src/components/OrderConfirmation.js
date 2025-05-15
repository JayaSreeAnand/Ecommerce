import React from 'react';
import { useLocation } from 'react-router-dom';
import './OrderConfirmation.css';

function OrderConfirmation() {
  const location = useLocation();
  const { userInfo, cartItems, paymentInfo } = location.state || {};

  if ((!userInfo && !paymentInfo) || !cartItems || cartItems.length === 0) {
    return <div style={{textAlign: 'center', marginTop: '50px', fontSize: '1.5rem', color: '#555'}}>No order information available.</div>;
  }

  // Updated delivery date
  const deliveryDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
  const orderId = '#1023498789';
  const paymentMethod = paymentInfo ? `Card ending in ${paymentInfo.cardNumber.slice(-4)}` : 'Master card';

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = 0; // Assuming no discount for now
  const total = subtotal - discount;

  // Map product names to images
  const getProductImage = (productName) => {
    if (!productName) return process.env.PUBLIC_URL + '/images/Product.jpeg';
    const lowerName = productName.toLowerCase();
    if (lowerName.includes('oryza')) {
      return process.env.PUBLIC_URL + '/images/Product.JPG'; 
    }
    if (lowerName.includes('cooker') || lowerName.includes('electric cooker')) {
      return process.env.PUBLIC_URL + '/images/Main.JPG';
    }
    return process.env.PUBLIC_URL + '/images/Main.JPG'; 
  };

  return (
    <div className="order-confirmation-wrapper" style={{ display: 'flex', maxWidth: '900px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      {/* Left side - Billing Address */}
      <div className="billing-address" style={{ flex: 1, paddingRight: '40px', borderRight: '1px solid #ddd' }}>
        <h2 style={{ marginBottom: '20px' }}>Billing Address</h2>
        {userInfo ? (
          <>
            <p><strong>Name</strong><br />{userInfo.name}</p>
            <p><strong>Email Address</strong><br />{userInfo.email || userInfo.address}</p>
            <p><strong>Phone Number</strong><br />{userInfo.phone}</p>
            <p><strong>Address</strong><br />{userInfo.address}</p>
          </>
        ) : (
          <p>No billing information available.</p>
        )}
        <hr style={{ margin: '20px 0' }} />
        <p><strong>Subtotal</strong> <span style={{ float: 'right' }}>Rs. {subtotal.toFixed(2)}</span></p>
        <p><strong>Discount</strong> <span style={{ float: 'right' }}>Rs. {discount.toFixed(2)}</span></p>
        <hr style={{ margin: '20px 0' }} />
        <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Total <span style={{ float: 'right' }}>Rs. {total.toFixed(2)}</span></p>
      </div>

      {/* Right side - Order Summaries */}
      <div className="order-summaries" style={{ flex: 1, paddingLeft: '40px' }}>
        <h2 style={{ marginBottom: '20px' }}>Order Summaries</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Delivery Date</p>
            <p style={{ margin: 0 }}>{deliveryDate}</p>
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Order ID</p>
            <p style={{ margin: 0 }}>{orderId}</p>
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Payment Method</p>
            <p style={{ margin: 0 }}>{paymentMethod}</p>
          </div>
        </div>

        {/* List of ordered products */}
        {cartItems.map((item, index) => (
          <div key={item._id || item.id || index} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <img
              src={getProductImage(item.name)}
              alt={item.name}
              style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', marginRight: '15px' }}
            />
            <div style={{ flex: 1 }}>
              <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>{item.name}</p>
              <p style={{ margin: '0 0 5px 0', color: '#666' }}>Color: {item.color || 'Default'}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
              <button disabled style={{ width: '25px', height: '25px', borderRadius: '50%', border: '1px solid #ccc', background: 'none', cursor: 'default' }}>−</button>
              <input
                type="text"
                value={item.quantity}
                readOnly
                style={{ width: '30px', textAlign: 'center', border: 'none', background: 'none', margin: '0 5px' }}
              />
              <button disabled style={{ width: '25px', height: '25px', borderRadius: '50%', border: '1px solid #ccc', background: 'none', cursor: 'default' }}>+</button>
            </div>
            <div style={{ fontWeight: 'bold', color: '#3b82f6' }}>
              Rs. {(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}

        {/* Free gift section */}
        <div style={{ marginTop: '30px', padding: '15px', border: '1px solid #3b82f6', borderRadius: '8px', backgroundColor: '#e0f0ff' }}>
          <h3 style={{ color: '#3b82f6' }}>With your order, you got a free gift!</h3>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <img
              src={process.env.PUBLIC_URL + '/images/Kit.jpg'}
              alt="Free Gift"
              style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px', marginRight: '15px' }}
            />
            <p style={{ margin: 0 }}>
              Includes a steaming tray, measuring cup, and serving spatula.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
