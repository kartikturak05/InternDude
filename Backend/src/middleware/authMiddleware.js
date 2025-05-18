// src/middleware/protectFirebase.js
const admin = require("../config/firebase");

const protectFirebase = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized, no token provided" });
  }

  const token = authHeader.split(" ")[1];
  
  try {
    // Verify Firebase JWT Token
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken; // Attach user data to request
    next();
  } catch (error) {
    console.error("Firebase Token Verification Error:", error);
    res.status(401).json({ message: "Unauthorized, invalid token" });
  }
};

module.exports = { protectFirebase };
