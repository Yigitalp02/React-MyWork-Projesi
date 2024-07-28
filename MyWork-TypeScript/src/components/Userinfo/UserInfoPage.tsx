import React from 'react';
import { useLocation } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const UserInfoPage: React.FC = () => {
  const location = useLocation();
  const { name, email, password, confirmPassword } = (location.state as FormData) || {};

  return (
    <div className="user-info-page">
      <h2>User Information</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Password:</strong> {password}</p>
      <p><strong>Confirm Password:</strong> {confirmPassword}</p>
    </div>
  );
}

export default UserInfoPage;
