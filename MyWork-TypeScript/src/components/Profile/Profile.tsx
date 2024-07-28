// src/components/Profile.tsx
import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import Sidebar from './Sidebar';
import ProfileInfo from './ProfileInfo';
import ProfileTasks from './ProfileTasks';
import { loadBootstrap } from '../loadBootstrap';
import './profile.css';

const Profile: React.FC = () => {
  useEffect(() => {
    loadBootstrap();
  }, []);

  return (
    <div id="profile-page">
      <ProfileHeader />
      <div className="profile-container">
        <Sidebar />
        <div className="profile-main">
          <Routes>
            <Route path="/" element={<Navigate to="info" />} />
            <Route path="info" element={<ProfileInfo />} />
            <Route path="tasks" element={<ProfileTasks />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Profile;
