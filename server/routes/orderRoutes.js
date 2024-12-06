const express = require('express');
const { protect, admin } = require('../middleware/authMiddleware');
const { createOrder, getMyOrders, getAllOrders, updateOrderStatus } = require('../controllers/orderController');

const router = express.Router();

// Create a new order for the logged-in user
router.post('/', protect, createOrder);

// Get current user's orders
router.get('/mine', protect, getMyOrders);

// Admin: Get all orders
router.get('/', protect, admin, getAllOrders);

// Admin: Update order status
router.put('/:id', protect, admin, updateOrderStatus);

module.exports = router;
