// routes/orderRoutes.js
const express = require('express');
const { getOrdersForUser } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/user/:userId', protect, getOrdersForUser);

module.exports = router;
