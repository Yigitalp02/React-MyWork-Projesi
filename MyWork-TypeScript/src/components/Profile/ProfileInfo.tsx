// src/components/ProfileInfo.tsx
import React from 'react';
import './profileInfo.css';

const ProfileInfo: React.FC = () => {
  return (
    <div id="info-section" className="info-section">
      <div className="info-container">
        <div className="picture-container">
          <img src="" alt="Profile" className="profile-picture" />
          <button type="button" className="change-picture-button">Change Picture</button>
        </div>
        <form className="info-form">
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" placeholder="Username" />
          </div>
          <div className="form-group">
            <label>Email Id</label>
            <input type="email" className="form-control" placeholder="Email Id" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" className="form-control" placeholder="Phone Number" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileInfo;
