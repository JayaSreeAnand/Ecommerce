const Order = require('../models/Order');

// Create a new order
const createOrder = async (req, res) => {
  console.log('createOrder called with body:', req.body);
  try {
    const { items, totalPrice, customerEmail, user } = req.body;

    if (!items || !totalPrice || !customerEmail || !user) {
      console.log('Missing required fields');
      return res.status(400).json({ message: 'Missing required fields' });
    }

    if (!Array.isArray(items) || items.length === 0) {
      console.log('Items is not a valid array or is empty');
      return res.status(400).json({ message: 'Items must be a non-empty array' });
    }

    for (const item of items) {
      if (!item.productId || !item.quantity) {
        console.log('Invalid item in items:', item);
        return res.status(400).json({ message: 'Each item must have productId and quantity' });
      }
    }

    const order = new Order({
      user,
      items,
      totalPrice,
      customerEmail,
      status: 'Pending'
    });

    console.log('Saving order:', order);
    const savedOrder = await order.save();
    console.log('Order saved successfully:', savedOrder);

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error('Error in createOrder:', error);
    res.status(500).json({ error: error.message });
  }
};

// Get orders for a customer email
const getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId })
      .populate('items.productId');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get order details by ID
const getOrderDetails = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId)
      .populate('items.productId');
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  getOrdersByUser,
  getOrderDetails
};
