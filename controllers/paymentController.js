exports.processPayment = async (req, res) => {
  try {
    const { amount, paymentMethod, cardDetails } = req.body;
if (!amount || !paymentMethod) {
      return res.status(400).json({ message: 'Amount and payment method are required' });
    }

    
    if (paymentMethod === 'card') {
    
      if (!cardDetails || !cardDetails.cardNumber || !cardDetails.expiry || !cardDetails.cvv || !cardDetails.name) {
        return res.status(400).json({ message: 'Incomplete card details' });
      }
    }

    
    await new Promise(resolve => setTimeout(resolve, 1000));

    res.status(200).json({ message: 'Payment processed successfully' });
  } catch (error) {
    console.error('Payment processing error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
