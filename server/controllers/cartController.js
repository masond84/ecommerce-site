const Cart = require('../models/Cart');

// Get user cart
const getCart = async (req, res) => {
    const cart = await Cart.findOne({ userId: req.user.id }).populate('products.productId');
    res.json(cart || { userId: req.user.id, products: [] });
};

// Add item to cart
const addToCart = async (req, res) => {
    const { productId, quantity } = req.body;

    const cart = await Cart.findOne({ userId: req.user.id });

    if (cart) {
        const existingProduct = cart.products.find((p) => p.productId.toString() === productId);
        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.products.push({ productId, quantity });
        }
        await cart.save();
        res.json(cart);
    } else {
        const newCart = await Cart.create({
            userId: req.user.id,
            products: [{ productId, quantity }],
        });
        res.status(201).json(newCart);
    }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.products = cart.products.filter((p) => p.productId.toString() !== req.params.id);
    await cart.save();
    res.json(cart);
};

module.exports = { getCart, addToCart, removeFromCart };
