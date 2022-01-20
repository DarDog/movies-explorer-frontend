import React from 'react';
import { Navigate, useLocation } from "react-router";

const ProtectedRoute = ({ children, isLoggedIn }) => {
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to='/signin' state={{ from: location }}/>
  }

  return children;
}

export default ProtectedRoute;
