import React from 'react';
import { Navigate, useLocation } from "react-router";
import {useAuth} from "../../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const {user} = useAuth();

  if (!user) {
    return <Navigate to='/' state={{ from: location }}/>
  }

  return children;
}

export default ProtectedRoute;
