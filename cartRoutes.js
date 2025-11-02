const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/', cartController.createCart);
router.get('/', cartController.getCarts);
router.delete('/:id', cartController.deleteCart);

module.exports = router;
