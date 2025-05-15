import React, { useState } from 'react';
import './ProductList.css';

const ProductList = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: 'Electric Cooker',
      description: [
        'A versatile electric cooker designed for efficient and consistent cooking performance.',
        'Features advanced temperature control and safety mechanisms.'
      ],
      price: 3000,
      images: ['/images/main.jpg', ],
    },
    {
      id: 2,
      name: 'Oryza Advanced Cooker',
      description: [
        'An advanced electric cooker with patented automatic draining technology.',
        'Reduces excess starch and enhances the nutritional value of your meals.'
      ],
      price: 4999,
      images: ['/images/Product.jpeg', ],
    },
  ];

  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );

  const handleQuantityChange = (productId, delta) => {
    setQuantities(prev => {
      const newQty = Math.max(1, (prev[productId] || 1) + delta);
      return { ...prev, [productId]: newQty };
    });
  };

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: quantities[product.id] });
  };

  return (
    <div className="product-list">
      <h2>Our Products</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.images[0]} alt={product.name} />
            <h3>{product.name}</h3>
            {product.description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
            <p>Price: Rs. {product.price.toFixed(2)}</p>
            <div className="quantity-control">
              <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
              <span>{quantities[product.id]}</span>
              <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
            </div>
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
