import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import About from './pages/About';
import MyOrders from './pages/MyOrders';
import AdminOrders from './pages/AdminOrders';
import { useCart } from './context/CartContext';

export default function App() {
  const { cart } = useCart();

  return (
    <BrowserRouter>
      <header className="topbar">
        <div className="logo">TechWorld</div>
        <nav className="navlinks">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({cart.length})</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/about">About</Link>
          <Link to="/orders">My Orders</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/admin" element={<AdminOrders />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
