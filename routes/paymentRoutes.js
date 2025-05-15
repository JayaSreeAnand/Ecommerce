const express = require('express');
const router = express.Router();
const { processPayment } = require('../controllers/paymentController');

router.post('/process-payment', processPayment);

module.exports = router;
