const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Register (admin/staff/user)
router.post("/register", authController.register);

// Login (admin/staff/user)
router.post("/login", authController.login);

module.exports = router;
