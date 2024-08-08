// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import './index.css';
import { UserProvider } from './components/UserContext';
import RegistrationForm from './components/Registration/RegistrationForm';
import LoginForm from './components/Login/LoginForm';
import ResetPasswordForm from './components/Login/ResetPasswordForm';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import AboutUs from './components/Aboutus/AboutUs';
import Profile from './components/Profile/Profile';
import background2 from './icons/background1.png';
import background1 from './icons/background2.png';

// Ana App bileşeni
const App: React.FC = () => (
  <Router>
    {/* Kullanıcı bağlamını sağlayan UserProvider bileşeni */}
    <UserProvider>
      <AppContent />
    </UserProvider>
  </Router>
);

// Ana içerik bileşeni
const AppContent: React.FC = () => {
  const location = useLocation(); // Geçerli URL konumunu almak için kullanılır
  const authPages = ['/register', '/login', '/reset-password']; // Kimlik doğrulama sayfalarının yolları

  const isAuthPage = authPages.includes(location.pathname); // Geçerli sayfanın bir kimlik doğrulama sayfası olup olmadığını kontrol eder

  return (
    <div className={`app ${isAuthPage ? 'auth-page' : ''}`}>
      {isAuthPage && (
        <div className="left-images">
          <img src={background1} alt="Background 1" className="background1" />
          <img src={background2} alt="Background 2" className="background2" />
        </div>
      )}
      <div className="main-content">
        <Routes>
          {/* Yönlendirme rotaları */}
          <Route path="/" element={<Navigate to="/register" />} /> {/* Ana sayfaya gidildiğinde kayıt sayfasına yönlendirir */}
          <Route path="/register" element={<RegistrationForm />} /> {/* Kayıt formu */}
          <Route path="/login" element={<LoginForm />} /> {/* Giriş formu */}
          <Route path="/reset-password" element={<ResetPasswordForm />} /> {/* Şifre sıfırlama formu */}
          <Route path="/contact" element={<Contact />} /> {/* İletişim sayfası */}
          <Route path="/about" element={<AboutUs />} /> {/* Hakkımızda sayfası */}
          <Route path="/profile/*" element={<Profile />} /> {/* Profil sayfası */}
          <Route path="/home/*" element={<Home />} /> {/* Ana sayfa */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
