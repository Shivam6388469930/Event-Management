const express = require("express");
const router = express.Router();
const controller = require('../Controllers/paymentcontroller');

// User registration route
router.post('/createorder', controller.paymentcontrol);
module.exports=router