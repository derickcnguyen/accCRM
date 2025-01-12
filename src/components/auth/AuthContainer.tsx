import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { useAuth } from '../../hooks/useAuth';

export function AuthContainer() {
  const [showSignIn, setShowSignIn] = useState(true);
  const { user } = useAuth();

  const toggleForm = () => setShowSignIn(!showSignIn);

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return showSignIn ? (
    <SignInForm onToggle={toggleForm} />
  ) : (
    <SignUpForm onToggle={toggleForm} />
  );
}