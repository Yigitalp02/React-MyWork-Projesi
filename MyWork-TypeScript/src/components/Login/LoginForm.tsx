import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../Registration/InputField';
import ErrorMessage from '../Registration/ErrorMessage';

interface FormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
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
    if (formData.email !== 'correct@example.com' || formData.password !== 'correctpassword') {
      setError('Incorrect username or password!');
    } else {
      navigate('/user-info', { state: formData });
    }
  };

  return (
    <div className="login-page">
      <div className="login-form bg-dark text-white p-4 rounded">
        <h2>Welcome back!</h2>
        <p>Sign in to your account</p>
        {error && <ErrorMessage className="login-error" message={error} />}
        <form onSubmit={handleSubmit}>
          <InputField
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="mymail@mailserver.com"
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
          <button
            type="submit"
            className={`login-button ${isFilled ? 'filled' : 'not-filled'}`}
          >
            Login
          </button>
        </form>
      </div>
      <div className="footer mt-3 text-white">
        <p>Don't have an account? <a href="/register" className="text-primary">Sign up</a></p>
        <p><a href="#" className="text-primary">Forgot password?</a></p>
      </div>
    </div>
  );
};

export default LoginForm;
