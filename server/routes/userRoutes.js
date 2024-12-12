const express = require('express');
const { getUsers, getUserById } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// Fetch all users (admin only)
router.get('/', protect, admin, getUsers);

// Fetch a single user by ID
router.get('/:id', protect, admin, getUserById);

module.exports = router;
