import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import ErrorMessage from './ErrorMessage';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState<string>('');
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const isAnyFieldFilled = Object.values(formData).some(value => value !== '');
    setIsFilled(isAnyFieldFilled);
  }, [formData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.email === 'error@example.com') {
      setError('Email already in use, please use another.');
    } else {
      navigate('/user-info', { state: formData });
    }
  };

  return (
    <div className="registration-form">
      <h2>Create a MyWork Account</h2>
      {error && <ErrorMessage className="registration-error" message={error} />}
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Carpenter"
          iconName="user"
        />
        <InputField
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="jhcpart@emailserver.com"
          iconName="email"
        />
        <InputField
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          iconName="password"
        />
        <InputField
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          iconName="password"
        />
        <button
          type="submit"
          className={`registration-button ${isFilled ? 'filled' : 'not-filled'}`}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
