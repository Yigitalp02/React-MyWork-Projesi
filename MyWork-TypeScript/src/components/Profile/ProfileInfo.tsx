// src/components/ProfileInfo.tsx
import React, { useState } from 'react';
import './profileInfo.css';

const ProfileInfo: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<string | ArrayBuffer | null>("");

  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div id="info-section" className="info-section">
      <div className="info-container">
        <div className="picture-container">
          <img src={profilePicture as string} alt="Profile" className="profile-picture" />
          <label htmlFor="change-picture" className="change-picture-button">Change Picture</label>
          <input
            type="file"
            id="change-picture"
            accept="image/*"
            onChange={handlePictureChange}
            style={{ display: 'none' }}
          />
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
