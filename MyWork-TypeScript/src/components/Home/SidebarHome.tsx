// src/components/SidebarHome.tsx
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebarHome.css';
import menuIcon from '../icons/menu.png';
import newsIcon from '../icons/news.png';
import tasksIcon from '../icons/tasks.png';
import doneTasksIcon from '../icons/doneTasks.png';
import personListIcon from '../icons/personList.png';
import linkedinIcon from '../icons/linkedin.png';
import instagramIcon from '../icons/instagram.png';
import twitterIcon from '../icons/twitter.png';
import { UserContext } from '../UserContext';

interface SidebarHomeProps {
  onTasksClick: () => void;
}

const SidebarHome: React.FC<SidebarHomeProps> = ({ onTasksClick }) => {
  const location = useLocation(); // Mevcut konumu almak için kullanılır
  const { user } = useContext(UserContext) || {}; // Kullanıcı bilgisini almak için UserContext kullanılır

  const isActive = (path: string) => location.pathname === path; // Belirli bir yolun aktif olup olmadığını kontrol eder
  const isTasksPage = () => isActive('/home/tasks') || isActive('/home/admin-tasks'); // Görev sayfasında olup olmadığını kontrol eder

  return (
    <div id="sidebar-home" className="sidebar">
      <div className="sidebar-title">MyWork</div>
      <button className="menu-button">
        <img src={menuIcon} alt="Menu" className="sidebar-icon" />
        Menu
      </button>
      <div className="sidebar-links">
        {/* News sayfasına yönlendiren bağlantı */}
        <Link to="/home/news" className={`sidebar-link ${isActive('/home/news') ? 'active' : ''}`}>
          <img src={newsIcon} alt="News" className="sidebar-icon" />
          News
        </Link>
        {/* Tasks sayfasına yönlendiren bağlantı */}
        <Link
          to={user?.isAdmin ? '/home/admin-tasks' : '/home/tasks'}
          className={`sidebar-link ${isTasksPage() ? 'active' : ''}`}
          onClick={onTasksClick}
        >
          <img src={tasksIcon} alt="Tasks" className="sidebar-icon" />
          Tasks
        </Link>
        {/* Tamamlanan görevler sayfasına yönlendiren bağlantı */}
        <Link to="/home/done-tasks" className={`sidebar-link ${isActive('/home/done-tasks') ? 'active' : ''}`}>
          <img src={doneTasksIcon} alt="Done Tasks" className="sidebar-icon" />
          Done Tasks
        </Link>
        {/* Kişi listesi sayfasına yönlendiren bağlantı */}
        <Link to="/home/person-list" className={`sidebar-link ${isActive('/home/person-list') ? 'active' : ''}`}>
          <img src={personListIcon} alt="Person List" className="sidebar-icon" />
          Person List
        </Link>
      </div>
      <div className="sidebar-social-media">
        {/* Sosyal medya bağlantıları */}
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

export default SidebarHome;
