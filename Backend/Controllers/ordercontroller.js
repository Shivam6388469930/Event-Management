const Order = require("../Model/userorder");



// Function to validate required fields
const validateUserForm = (data) => {
  const { name, email, phone, password } = data;
  if (!name || !email || !phone || !password) {
    throw new Error("All fields are required");
  }

 

  // Validate phone number (10 digits)
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    throw new Error("Invalid phone number");
  }

};

// **User registration**
exports.orderbook = async (req, res) => {
  try {
    validateUserForm(req.body);

    const { Event, Member, Decoration,Address,Number,Price} = req.body;

    // Check if user exists (email OR phone)
   

    const hashedPassword = await bcrypt.hash(password, 10);

    const userRegistration = await User.create({ name, email, phone, password: hashedPassword });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: userRegistration,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message || "An error occurred during registration",
    });
  }
};
