import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getDatabase, ref, onValue } from 'firebase/database';
import { UserContext } from '../UserContext';
import './header.css';
import exit_logo from '../icons/exit_logo.png';

const Header: React.FC = () => {
  const location = useLocation(); // Şu anki URL yolunu almak için kullanılır
  const navigate = useNavigate(); // Navigasyon için kullanılır
  const { user } = useContext(UserContext) || {}; // Kullanıcı bilgilerini context'ten alır
  const [profilePicture, setProfilePicture] = useState<string | null>(null); // Profil resmi durumu

  const isActive = (path: string) => location.pathname.startsWith(path); // Belirli bir yolun aktif olup olmadığını kontrol eder

  useEffect(() => {
    // Kullanıcı verilerini Firebase'den almak için kullanılır
    if (user) {
      const db = getDatabase();
      const userRef = ref(db, 'users/' + user.uid);
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setProfilePicture(data.profilePicture || null); // Profil resmini duruma ayarlar
        }
      });
    }
  }, [user]);

  const handleExitClick = () => {
    navigate('/login'); // Çıkış butonuna tıklandığında giriş sayfasına yönlendirir
  };

  return (
    <header id="header" className="header p-3">
      <div className="d-flex justify-content-between align-items-center w-100">
        <button className="header-title" onClick={() => navigate('/home')}>MyWork</button>
        <div className="navbar d-flex justify-content-end flex-grow-1">
          <Link to="/profile" className={`nav-link ${isActive('/profile') ? 'active' : ''}`}>Profile</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About Us</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
          <button className="menu-button" id="menuButton">Menu</button>
        </div>
        <div className="user-info">
          {profilePicture && <img src={profilePicture} alt="Profile" className="user-profile-picture" />}
          <span className="user-name">Logged In: {user?.name}</span> {/* Kullanıcı adı gösterimi */}
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
