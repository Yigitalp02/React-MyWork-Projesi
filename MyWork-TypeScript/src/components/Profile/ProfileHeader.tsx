// src/components/ProfileHeader.tsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './profileHeader.css';
import searchIcon from '../icons/search.png';
import exitLogo from '../icons/exit_logo.png';

const ProfileHeader: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path: string) => location.pathname.startsWith(path);

  const handleExitClick = () => {
    navigate('/home');
  };

  return (
    <header id="profile-header">
      <div className="search-bar-container">
        <div className="search-bar">
          <img src={searchIcon} alt="Search" className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>
      <div className="navbar">
        <Link to="/profile/info" className={`nav-link ${isActive('/profile') ? 'active' : ''}`}>Profile</Link>
        <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About Us</Link>
        <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
        <button onClick={handleExitClick} className="exit-button">
          <img src={exitLogo} alt="Exit" className="exit-icon" />
          <span className="ml-1">Exit</span>
        </button>
      </div>
    </header>
  );
};

export default ProfileHeader;
