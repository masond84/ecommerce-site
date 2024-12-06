const express = require('express');
const { protect, admin } = require('../middleware/authMiddleware');
const { getUserProfile, updateUserProfile, getUsers } = require('../controllers/userController');

const router = express.Router();

// Get logged-in user's profile
router.get('/profile', protect, getUserProfile);

// Update logged-in user's profile
router.put('/profile', protect, updateUserProfile);

// Admin: Get all users
router.get('/', protect, admin, getUsers);

module.exports = router;
