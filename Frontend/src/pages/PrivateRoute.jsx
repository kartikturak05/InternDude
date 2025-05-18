// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Function to check if the user is authenticated
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token; // If token exists, user is authenticated
};

const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateRoute;
