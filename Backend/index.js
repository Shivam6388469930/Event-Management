const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const contactRouters = require("./Router/contactroute");
const userRouters = require("./Router/userRoute");
const event = require("./Router/event");
const payments = require("./Router/pay");
const createcontact = require("./db");
const helmet = require("helmet");

dotenv.config();
createcontact();

const app = express();
const Port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:3000" }));
app.use(helmet());

// Routes
app.use("/api", event);
app.use("/", contactRouters);
app.use("/", userRouters);
app.use("/pay", payments); // ✅ Razorpay payment route

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Something went wrong!", error: err.message });
});

// Start server
app.listen(Port, () => console.log(`Server running on port ${Port}`));
