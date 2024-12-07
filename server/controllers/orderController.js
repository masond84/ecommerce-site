// controllers/orderController.js
const Order = require('../models/Order');

const getOrdersForUser = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error });
  }
};

module.exports = { getOrdersForUser };
