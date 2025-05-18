// src/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const { googleLogin } = require("../controllers/authController");

// Define your routes
router.post("/google-login", googleLogin);

// Export the router
module.exports = router;