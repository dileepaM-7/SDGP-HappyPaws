import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from './firebase-config';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const user = auth.currentUser;

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
