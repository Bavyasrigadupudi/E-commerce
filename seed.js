const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();
const connectDB = require('../config/db');

const products = [
  { name: 'iPhone 15 Pro', price: 135000, image: 'https://m.media-amazon.com/images/I/71dQf6xg6PL._SL1500_.jpg', description: 'Apple iPhone 15 Pro', category: 'Mobile' },
  { name: 'Samsung Galaxy S23', price: 90000, image: 'https://m.media-amazon.com/images/I/71q1mJ1T6JL._SL1500_.jpg', description: 'Samsung flagship', category: 'Mobile' },
  { name: 'Dell XPS 13', price: 120000, image: 'https://m.media-amazon.com/images/I/71k7+Yk6kNL._SL1500_.jpg', description: '13-inch ultrabook', category: 'Laptop' },
  { name: 'MacBook Air M3', price: 145000, image: 'https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg', description: 'Apple M3 chip', category: 'Laptop' },
  { name: 'Apple Watch Series 9', price: 45000, image: 'https://m.media-amazon.com/images/I/71f6j6Jm8yL._SL1500_.jpg', description: 'Smartwatch', category: 'Smartwatch' },
  { name: 'Sony WH-1000XM5', price: 32000, image: 'https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg', description: 'Noise-cancelling headphones', category: 'Headphones' },
  { name: 'JBL Flip 6', price: 11000, image: 'https://m.media-amazon.com/images/I/61YJ3f3m2BL._SL1500_.jpg', description: 'Portable speaker', category: 'Speaker' },
  { name: 'Canon EOS R50', price: 78000, image: 'https://m.media-amazon.com/images/I/81Q8Wb0dJGL._SL1500_.jpg', description: 'Mirrorless camera', category: 'Camera' },
  { name: 'PlayStation 5', price: 59000, image: 'https://m.media-amazon.com/images/I/619BkvKW35L._SL1500_.jpg', description: 'Gaming console', category: 'Gaming' },
  { name: 'Apple iPad Air (M2)', price: 68000, image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg', description: 'Tablet', category: 'Tablet' }
];

const seed = async () => {
  await connectDB();
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Seeded 10 TechWorld products');
  process.exit();
};

seed();
