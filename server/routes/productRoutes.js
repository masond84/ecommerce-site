const express = require('express');
const router = express.Router();
const {
    getProducts,
    getProductById,
    createProduct,
} = require('../controllers/productController');

router.get('/', getProducts);             // Get all products
router.get('/:id', getProductById);       // Get product by ID
router.post('/', createProduct);          // Add new product

module.exports = router;