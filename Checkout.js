import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
    paymentMethod: 'COD'
  });

  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0) + 50;
  const navigate = useNavigate();

  const handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const place = async () => {
    const order = {
      items: cart.map(i => ({ productId: i._id, name: i.name, price: i.price, qty: i.qty })),
      total,
      address: form,
      paymentMethod: form.paymentMethod
    };

    await api.post('/api/orders', order);

    localStorage.removeItem('cart');

    alert('Order placed');
    navigate('/orders');
  };

  return (
    <div style={{ display: 'flex', gap: 30 }}>
      <div style={{ flex: 1 }}>
        <h2>Delivery Information</h2>
        <div className="checkout-form">
          <input name="firstName" placeholder="First name" onChange={handle} />
          <input name="lastName" placeholder="Last name" onChange={handle} />
          <input name="email" placeholder="Email" onChange={handle} />
          <input name="street" placeholder="Street" onChange={handle} />
          <input name="city" placeholder="City" onChange={handle} />
          <input name="state" placeholder="State" onChange={handle} />
          <input name="zip" placeholder="Zip code" onChange={handle} />
          <input name="country" placeholder="Country" onChange={handle} />
          <input name="phone" placeholder="Phone" onChange={handle} />
        </div>
      </div>

      <div style={{ width: 360 }}>
        <h3>Cart Totals</h3>
        <div className="badge">Subtotal ₹{cart.reduce((s, i) => s + i.price * i.qty, 0)}</div>
        <div style={{ marginTop: 12 }}>Delivery Fee ₹50</div>
        <h3>Total ₹{total}</h3>

        <h4>Payment Method</h4>
        <label>
          <input type="radio" name="paymentMethod" value="COD" defaultChecked onChange={handle} />
          COD
        </label>
        <br />
        <label>
          <input type="radio" name="paymentMethod" value="Card" onChange={handle} />
          Card
        </label>
        <br />
        <button style={{ marginTop: 12 }} onClick={place}>Place Order</button>
      </div>
    </div>
  );
}
