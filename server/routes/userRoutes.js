const express = require('express');
const { getUsers, getUserById, createUser } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// Fetch all users 
router.get('/', getUsers);

// Fetch a single user by ID
router.get('/:id', getUserById);

// Create a new user (signup)
router.post('/', createUser);

module.exports = router;