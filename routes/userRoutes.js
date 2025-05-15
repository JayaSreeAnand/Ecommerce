
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

// User registration
router.post('/register', userController.registerUser);

// User login
router.post('/login', userController.loginUser);

// Get user details
router.get('/:id', userController.getUserDetails);

module.exports = router;






