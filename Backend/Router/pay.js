const express = require('express');
const Razorpay = require('razorpay');
const router = express.Router();

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: 'rzp_test_7VXRc8O89d3bz1',
  key_secret: '69fFf3BjY8z7Yd3r98gVPmni',
});

// Payment route
router.post('/payment', async (req, res) => {
  const { tokenAmount, currency, receipt } = req.body;

  try {
    const options = {
      amount: tokenAmount * 100, // ✅ Corrected field name (Razorpay expects `amount`)
      currency: currency || 'INR',
      receipt: receipt || `rcptid_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({ success: true, order });
  } catch (error) {
    console.error('Razorpay error:', error);
    res.status(500).json({ success: false, message: 'Payment initiation failed' });
  }
});

module.exports = router;
