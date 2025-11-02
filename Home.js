import React, { useEffect, useState } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    api.get('/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="grid">
        {products.map(p => (
          <div key={p._id} className="product-card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <div className="actions">
              <button onClick={() => addToCart(p, 1)}>Add to cart</button>
              <Link to={/product/${p._id}}>View</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
