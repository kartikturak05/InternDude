// src/controllers/authController.js
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const admin = require("../config/firebase");
require("dotenv").config();

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// Firebase Google Login
const googleLogin = async (req, res) => {
  const { idToken } = req.body;
  console.log("Received ID Token:", idToken); // Debugging

  try {
    if (!idToken) {
      return res.status(400).json({ message: "ID Token is required" });
    }

    // Verify Firebase Token
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    console.log("Decoded Token:", decodedToken); // Debugging

    const { uid, email, name, picture } = decodedToken;

    // Check if user exists
    let user = await User.findOne({ email });

    if (!user) {
      // If user does not exist, create a new user
      user = await User.create({
        name: name,
        email: email,
        password: "firebase_authenticated", // Placeholder password
        googleId: uid,
        role: "Student", // Default role as Student, can be Employer later
        profileImage: picture, // Store Google profile image if needed
      });
    }

    // Generate JWT Token (Backend)
    const token = generateToken(user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      profileImage: user.profileImage,
      token: token,
    });
  } catch (error) {
    console.error("Firebase Authentication Error:", error);

    if (error.codePrefix === "auth") {
      return res.status(401).json({ message: "Invalid Firebase ID Token" });
    }

    res.status(500).json({ message: "Firebase Authentication Failed" });
  }
};

module.exports = { googleLogin };
