const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY || "shivam"; // Use env variable for security


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    },
    phone: {
      type: String,
      required: true,
      unique: true, // Ensures unique phone numbers
      trim: true,
      match: [/^\d{10}$/, 'Phone number must be exactly 10 digits'],
    },
    password: {
      type: String,
      required: true,
      minlength: 8, // Enforces at least 8 characters
      match: [/(?=.*[0-9])(?=.*[!@#$%^&*])/, 'Password must contain at least one number and one special character'],
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        }
      }
    ]
  },
  {
    timestamps: true,
  }
);

// Generate Auth Token
    userSchema.methods.generateAutoToken = async function () {
      const newtoken = jwt.sign({ _id: this._id }, SECRET_KEY, { expiresIn: "1d" });
      this.tokens = this.tokens.concat({ token: newtoken });
      await this.save();
      return newtoken;
    };
const User = mongoose.model('User', userSchema);
module.exports = User;

