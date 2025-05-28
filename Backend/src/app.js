// src/app.js
const express = require("express");
const connectDB = require("./config/database");
require("dotenv").config();

// Create Express app
const app = express();
const cors = require("cors");
app.use(cors());
// app.use((req, res, next) => {
//   res.removeHeader("Cross-Origin-Opener-Policy");
//   res.removeHeader("Cross-Origin-Embedder-Policy");
//   next();
// });
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect Database (MongoDB)
connectDB();

// Import routes
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profile"); // New profile routes

// Use routes
app.use("/api/profile", profileRoutes);
app.use("/api/auth", authRoutes);



// Basic route for testing
app.get("/", (req, res) => {
  res.send("InternDude Backend API is running!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;