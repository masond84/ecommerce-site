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

// Create a new user 
const createUser = async(req, res) => {
    try {
        const { username, name, email, password } = req.body;

        // Validate required fields
        if (!username || !name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            username,
            name,
            email,
            password: hashedPassword,
        });
    
        const savedUser = await newUser.save();

        // Return success response
        res.status(201).json({ 
            message: 'User created successfully', 
            user: {
                id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email,
                role: savedUser.role,
            }, 
        });
    } catch (error) {
        console.error('Error in createUser:', error.message || error);
        res.status(500).json({ message: 'Error creating user', error });
    }
};

module.exports = { getUsers, getUserById, createUser };