import React, { useState } from 'react';
import './ProductDetail.css';

function ProductDetail({ onAddToCart }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: 'Smart Rice Cooker',
    rating: 4.5,
    ratingCount: 92,
    price: 4999.99,
    description: [
      "Cook your favorite grains to perfection with the Gantham Electric Rice Cooker. This countertop cooker takes the guesswork out of prepping fluffy, comforting grains every time, with auto-cook programs for white rice, brown rice, oats, and quinoa – plus an all-encompassing “grains” setting to tend to niche favorites like farro, buckwheat, and amaranth.",
      "In addition to its 5 grain programs, the EveryGrain™ Cooker’s steam setting and included basket let you prepare veggies and proteins alongside your grains for easy, balanced meals. It’s also equipped with a 10-cup cooking pot and convenient delay start function, making it the ideal partner for effortless meal prep, make-ahead dishes, and busy days alike."
    ],
    images: [
      '/images/Product.jpeg',
      '/images/Cooker 01.jpeg',
      '/images/Fluffy.JPG',
      '/images/Power.JPG',
      '/images/Clean.JPG',
      '/images/Kit.JPG',
      '/images/Automatic.JPG',
      '/images/WhyGantham.JPG'
    ]
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCartClick = () => {
    if (onAddToCart) {
      onAddToCart({ ...product, quantity });
    }
  };

  // Generate stars for rating
  const renderStars = () => {
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 >= 0.5;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star full">&#9733;</span>);
    }
    if (halfStar) {
      stars.push(<span key="half" className="star half">&#9733;</span>);
    }
    while (stars.length < 5) {
      stars.push(<span key={'empty' + stars.length} className="star empty">&#9734;</span>);
    }
    return stars;
  };

  return (
    <div className="product-detail-wrapper">
      <div className="image-thumbnails">
        {product.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${product.name} thumbnail ${idx + 1}`}
            className={`thumbnail ${idx === currentImageIndex ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(idx)}
          />
        ))}
      </div>
      <div className="main-image-container">
        <img
          src={product.images[currentImageIndex]}
          alt={`${product.name} main`}
          className="main-image"
        />
      </div>
      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <div className="rating">
          {renderStars()}
          <span className="rating-value">{product.rating} ({product.ratingCount})</span>
        </div>
        <div className="price">${product.price.toFixed(2)}</div>
        <div className="description">
          {product.description.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
        <div className="purchase-section">
          <button className="add-to-cart-btn" onClick={handleAddToCartClick}>ADD TO CART</button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="quantity-input"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
