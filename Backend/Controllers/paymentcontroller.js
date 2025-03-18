const Razorpay = require('razorpay');

// Use environment variables for API keys
const razorpayInstance = new Razorpay({
    key_id: "rzp_test_7VXRc8O89d3bz1",
    key_secret: "69fFf3BjY8z7Yd3r98gVPmni",
    
});

exports.paymentcontrol = async (req, res) => {
    try {
        const amount = req.body.amount;
        const options = {
            amount: amount * 100, // Razorpay expects amount in paise
            currency: 'INR',
            receipt: 'razorpay@13226'
        };

        const order = await razorpayInstance.orders.create(options);

        res.status(200).json({
            success: true,
            message: 'Order Created',
            order_id: order.id,
            amount: amount,
            key_id:razorpayInstance.key_id,
            product_name: req.body.name,
            description: req.body.description,
            contact: "8567345632",
            name: "Sandeep Sharma",
            email: "sandeep@gmail.com"
        });

    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ success: false, message: "Technical error" });
    }
};
