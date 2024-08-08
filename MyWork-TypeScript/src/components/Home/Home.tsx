// src/components/Home.tsx
import React, { useEffect, useContext } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import ProfileHeader from '../Profile/ProfileHeader';
import SidebarHome from './SidebarHome';
import LatestNews from './LatestNews';
import Status from './Status';
import Persons from './Persons';
import HomeTasks from './HomeTasks';
import AdminTasks from './AdminTasks';
import { loadBootstrap } from '../loadBootstrap';
import { UserContext } from '../UserContext';
import './home.css';

const Home: React.FC = () => {
  useEffect(() => {
    loadBootstrap(); // Bootstrap'i yükler
  }, []);

  const userContext = useContext(UserContext); // UserContext'i kullanıyor
  const user = userContext?.user; // Kullanıcı bilgisini alıyor
  const navigate = useNavigate(); // Yönlendirme fonksiyonunu alıyor

  const handleTasksClick = () => {
    if (user?.isAdmin) {
      navigate('/home/admin-tasks'); // Eğer kullanıcı admin ise admin-tasks sayfasına yönlendir
    } else {
      navigate('/home/tasks'); // Eğer kullanıcı admin değilse tasks sayfasına yönlendir
    }
  };

  return (
    <div id="home-page">
      <ProfileHeader /> {/* ProfileHeader bileşenini render eder */}
      <div className="home-container">
        <SidebarHome onTasksClick={handleTasksClick} /> {/* SidebarHome bileşenini render eder ve onTasksClick olayını tanımlar */}
        <div className="home-main">
          <Routes>
            <Route path="/" element={<Navigate to="news" />} /> {/* Anasayfaya yönlendirir */}
            <Route path="news" element={
              <>
                <LatestNews /> {/* LatestNews bileşenini render eder */}
                <div className="home-bottom">
                  <Status /> {/* Status bileşenini render eder */}
                  <Persons /> {/* Persons bileşenini render eder */}
                </div>
              </>
            } />
            <Route path="tasks" element={<HomeTasks />} /> {/* HomeTasks bileşenini render eder */}
            <Route path="admin-tasks" element={<AdminTasks />} /> {/* AdminTasks bileşenini render eder */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
