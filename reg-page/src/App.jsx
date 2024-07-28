import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import RegistrationForm from './components/RegistrationForm';
import UserInfoPage from './components/UserInfoPage';
import background2 from '../src/icons/background1.png';
import background1 from '../src/icons/background2.png';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="app">
      <div className="left-images">
        <img src={background1} alt="Background 1" className="background1" />
        <img src={background2} alt="Background 2" className="background2" />
      </div>
      <div className="main-content">
        <div className="header">MyWork</div>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/user-info" element={<UserInfoPage />} />
        </Routes>
        {location.pathname === '/' && (
          <div className="footer">
            <p>Already have an account? <a href="#">Login</a></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
