const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const contactRouters = require("./Router/contactroute");
const userRouters = require("./Router/userRoute");
const payRouter=require("./Router/PaymentRoutes")
const createcontact = require("./db");

dotenv.config(); // Load environment variables
createcontact(); // Connect to database

const app = express();
const Port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:3000" }));

// Routes
app.use("/", contactRouters);
app.use("/", userRouters);
app.use("/api",payRouter)

// Start Server
app.listen(Port, () => console.log(`Server running on port ${Port}`));
