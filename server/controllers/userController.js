const User = require('../models/User');

// Get current logged-in user's profile
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if(!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user profile", error: error.message });
    }
};

// Update logged-in user's profile
// frontend might send { username, email }
const updateUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if(!user) return res.status(404).json({ message: "User not found" });

        const { username, email } = req.body;
        if(username) user.username = username;
        if(email) user.email = email;

        await user.save();
        res.json({
            _id: user.id,
            username: user.username,
            email: user.email,
            role: user.role
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating profile", error: error.message });
    }
};

// Admin: Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find({}).select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
    }
};

module.exports = {
    getUserProfile,
    updateUserProfile,
    getUsers
};
