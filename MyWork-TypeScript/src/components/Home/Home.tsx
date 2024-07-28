// src/components/Home.tsx
import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ProfileHeader from '../Profile/ProfileHeader';
import SidebarHome from './SidebarHome';
import LatestNews from './LatestNews';
import Status from './Status';
import Persons from './Persons';
import HomeTasks from './HomeTasks';
import { loadBootstrap } from '../loadBootstrap';
import './home.css';

const Home: React.FC = () => {
  useEffect(() => {
    loadBootstrap();
  }, []);

  return (
    <div id="home-page">
      <ProfileHeader />
      <div className="home-container">
        <SidebarHome />
        <div className="home-main">
          <Routes>
            <Route path="/" element={<Navigate to="news" />} />
            <Route path="news" element={
              <>
                <LatestNews />
                <div className="home-bottom">
                  <Status />
                  <Persons />
                </div>
              </>
            } />
            <Route path="tasks" element={<HomeTasks />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
