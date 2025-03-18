const User = require("../Model/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY || "shivam"; // Use env variable for security

// Function to validate required fields
const validateUserForm = (data) => {
  const { name, email, phone, password } = data;
  if (!name || !email || !phone || !password) {
    throw new Error("All fields are required");
  }

  // Validate email format
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format");
  }

  // Validate phone number (10 digits)
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    throw new Error("Invalid phone number");
  }

  // Validate password strength
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters long");
  }
};

// **User registration**
exports.controlUserRegistration = async (req, res) => {
  try {
    validateUserForm(req.body);

    const { name, email, phone, password } = req.body;

    // Check if user exists (email OR phone)
    const existUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existUser) {
      return res.status(400).json({ success: false, message: "Email or phone already registered" });
    }

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


// **User login**
exports.controlUserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, existUser.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // Fix function name from generateAutoToken to generateAuthToken
    const token = await existUser.generateAutoToken();

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
      firstname: existUser.name,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "An error occurred during login" });
  }
};


// exports.getloguser = async (req, res) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1]; // Extract Bearer token

//     if (!token) {
//       return res.status(400).json({ message: "Token is required", success: false });
//     }

//     const decoded = jwt.verify(token, SECRET_KEY);
//     if (!decoded) {
//       return res.status(401).json({ message: "Invalid or expired token", success: false });
//     }

//     const user = await User.findById(decoded._id).select("-password"); // Exclude password
//     if (!user) {
//       return res.status(404).json({ message: "User not found", success: false });
//     }

//     res.status(200).json({ success: true, message: "Token is valid", username: user.name });

//   } catch (error) {
//     console.error("Error fetching user:", error);
//     res.status(500).json({ message: "Internal server error", success: false });
//   }
// };
