import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element: Component }) {
  const token = localStorage.getItem("token");

  return token ? <Component /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
