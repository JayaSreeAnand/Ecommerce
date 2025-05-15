const express = require('express');
const router = express.Router();
const { createOrder, getOrdersByUser, getOrderDetails } = require('../controllers/orderController');

router.post('/', createOrder);
router.get('/user/:userId', getOrdersByUser);
router.get('/:orderId', getOrderDetails);

module.exports = router;
