const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Fetch all users (admin only)
const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({message: 'Error fetching users', error });
    }
};

// Fetch a single user by ID
const getUserById = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
};

module.exports = { getUsers, getUserById };
