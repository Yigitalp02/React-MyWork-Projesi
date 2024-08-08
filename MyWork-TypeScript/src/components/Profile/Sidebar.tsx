// src/components/Sidebar.tsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './sidebar.css';
import menuIcon from '../icons/menu.png';
import infoIcon from '../icons/info.png';
import tasksIcon from '../icons/tasks.png';
import linkedinIcon from '../icons/linkedin.png';
import instagramIcon from '../icons/instagram.png';
import twitterIcon from '../icons/twitter.png';

const Sidebar: React.FC = () => {
  const location = useLocation(); // Mevcut URL konumunu almak için kullanılır
  const navigate = useNavigate(); // Yönlendirme işlemleri için kullanılır

  // Belirtilen path aktif mi kontrol eder
  const isActive = (path: string) => location.pathname === path;

  return (
    <div id="sidebar" className="sidebar">
      <button className="sidebar-title" onClick={() => navigate('/home')}>MyWork</button>
      <button className="menu-button">
        <img src={menuIcon} alt="Menu" className="sidebar-icon" />
        Menu
      </button>
      <div className="sidebar-links">
        <Link to="/profile/info" className={`sidebar-link ${isActive('/profile/info') ? 'active' : ''}`}>
          <img src={infoIcon} alt="Info" className="sidebar-icon" />
          Info
        </Link>
        <Link to="/profile/tasks" className={`sidebar-link ${isActive('/profile/tasks') ? 'active' : ''}`}>
          <img src={tasksIcon} alt="Tasks" className="sidebar-icon" />
          Tasks
        </Link>
      </div>
      <div className="sidebar-social-media">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
