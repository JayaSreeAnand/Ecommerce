
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');

// Create a product- by owner only (add auth later)
router.post('/', productController.createProduct);

// Get all products
router.get('/', productController.getAllProducts);

// Get single product
router.get('/:id', productController.getProductById);

// Update a product - by owner only (add auth later)
router.put('/:id', productController.updateProduct);

// Delete a product- by owner only (add auth later)
router.delete('/:id', productController.deleteProduct);

module.exports = router;
