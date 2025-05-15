import React from 'react';
import './Reviews.css';

function Reviews() {
  return (
    <div className="reviews-container">
      <h1>Customer Reviews</h1>
      <div>
        <p><strong>John D.</strong> - "Excellent cooker, very efficient and easy to use."</p>
      </div>
      <div>
        <p><strong>Mary S.</strong> - "Great value for money. Highly recommend this product."</p>
      </div>
      <div>
        <p><strong>Alex P.</strong> - "Customer service was very helpful and the cooker works perfectly."</p>
      </div>
    </div>
  );
}

export default Reviews;
