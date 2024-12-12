const express = require('express');
const { createOrder, getUserOrders } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware'); // Ensure user authentication

const router = express.Router();

router.post('/', protect, createOrder); // Create a new order
router.get('/', protect, getUserOrders); // Fetch user orders

module.exports = router;

