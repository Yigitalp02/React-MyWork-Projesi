import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import RegistrationForm from './components/Registration/RegistrationForm';
import UserInfoPage from './components/Userinfo/UserInfoPage';
import LoginForm from './components/Login/LoginForm';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import AboutUs from './components/Aboutus/AboutUs';
import Profile from './components/Profile/Profile';
import background2 from './icons/background1.png';
import background1 from './icons/background2.png';

const App: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
);

const AppContent: React.FC = () => {
  const location = useLocation();
  const authPages = ['/', '/user-info', '/login'];

  const isAuthPage = authPages.includes(location.pathname);

  return (
    <div className={`app ${isAuthPage ? 'auth-page' : ''}`}>
      {isAuthPage && (
        <div className="left-images">
          <img src={background1} alt="Background 1" className="background1" />
          <img src={background2} alt="Background 2" className="background2" />
        </div>
      )}
      <div className="main-content">
        {isAuthPage && <div className="header">MyWork</div>}
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/user-info" element={<UserInfoPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/home/*" element={<Home />} />
        </Routes>
        {location.pathname === '/' && (
          <div className="footer">
            <p>Already have an account? <a href="/login">Login</a> <a href="/contact">Contact</a><a href="/about">AboutUs</a><a href="/profile">Profile</a><a href="/home">Home</a></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
