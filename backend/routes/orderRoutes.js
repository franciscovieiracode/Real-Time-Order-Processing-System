const express = require('express');
const router = express.Router();
const { getOrders, createOrder } = require('../controllers/orderController');

// Define the GET route to fetch orders
router.get('/', getOrders);

// Define the POST route to create an order
router.post('/', createOrder);

module.exports = router;
