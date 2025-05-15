const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true, min: 1 }
    }
  ],
  totalPrice: { type: Number, required: true, min: 0 },
  customerEmail: { type: String, required: true },
  status: { type: String, default: 'Pending' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);
