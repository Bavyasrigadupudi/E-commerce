import React, { useEffect, useState } from 'react';
import api from '../api';

export default function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get('/api/orders')
      .then(res => setOrders(res.data))
      .catch(() => {});
  }, []);

  return (
    <div>
      <h2>My Orders</h2>
      {orders.map(o => (
        <div key={o._id} className="order-card">
          <div>
            <div style={{ fontWeight: 700 }}>Order #{o._id}</div>
            <div>Items: {o.items.length}</div>
            <div>Total: ₹{o.total}</div>
            <div>Status: {o.status}</div>
          </div>
          <div style={{ fontSize: 12, color: '#666' }}>
            Placed: {new Date(o.createdAt).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
}
