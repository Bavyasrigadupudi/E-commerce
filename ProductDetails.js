import React, { useEffect, useState } from 'react';
import api from '../api';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    api.get(/api/products/${id})
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: 420, height: 320, objectFit: 'cover' }}
      />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>₹{product.price}</h3>
        <button onClick={() => addToCart(product, 1)}>Add to cart</button>
      </div>
    </div>
  );
}
