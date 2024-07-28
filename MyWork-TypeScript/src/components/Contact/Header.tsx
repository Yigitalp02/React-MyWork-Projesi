// src/components/Header.tsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './header.css';
import exit_logo from '../icons/exit_logo.png';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path: string) => location.pathname.startsWith(path);

  const handleExitClick = () => {
    navigate('/home');
  };

  return (
    <header id="header" className="header p-3">
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="header-title">MyWork</div>
        <div className="navbar d-flex justify-content-end flex-grow-1">
          <Link to="/profile" className={`nav-link ${isActive('/profile') ? 'active' : ''}`}>Profile</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About Us</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
          <button className="menu-button" id="menuButton">Menu</button>
        </div>
        <button onClick={handleExitClick} className="exit-button d-flex align-items-center">
          <img src={exit_logo} alt="Exit" className="exit-icon" />
          <span className="ml-1">Exit</span>
        </button>
      </div>
      <div id="mobileMenu" className="d-none flex-column">
        <Link to="/profile" className={`nav-link ${isActive('/profile') ? 'active' : ''}`}>Profile</Link>
        <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About Us</Link>
        <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
      </div>
    </header>
  );
};

export default Header;
