const Order = require('../models/Order');
const Product = require('../models/Product');

// Create a new order for logged-in user
// Assume frontend sends { items: [{productId, quantity}, ...] }
const createOrder = async (req, res) => {
    try {
        const { items } = req.body;
        if(!items || !items.length) {
            return res.status(400).json({ message: "No items provided for order" });
        }

        let totalPrice = 0;
        for(const item of items) {
            const product = await Product.findById(item.productId);
            if(!product) {
                return res.status(404).json({ message: `Product not found with ID: ${item.productId}` });
            }
            totalPrice += product.price * item.quantity;
        }

        const order = await Order.create({
            userId: req.user.id,
            items,
            totalPrice,
            status: 'pending',
            createdAt: new Date()
        });

        res.status(201).json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating order", error: error.message });
    }
};

// Get all orders for current user
const getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user.id }).populate('items.productId');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user orders", error: error.message });
    }
};

// Admin: Get all orders
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).populate('items.productId');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching all orders", error: error.message });
    }
};

// Admin: Update order status
// frontend sends { status: "shipped" } or "delivered", etc.
const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const order = await Order.findById(req.params.id);
        if(!order) return res.status(404).json({ message: "Order not found" });

        order.status = status;
        await order.save();

        res.json(order);
    } catch (error) {
        res.status(500).json({ message: "Error updating order status", error: error.message });
    }
};

module.exports = {
    createOrder,
    getMyOrders,
    getAllOrders,
    updateOrderStatus
};
