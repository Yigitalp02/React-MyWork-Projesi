import React, { useState, useContext, useEffect } from 'react';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref as databaseRef, set, onValue } from 'firebase/database';
import { UserContext } from '../UserContext';
import './profileInfo.css';

const ProfileInfo: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<string | ArrayBuffer | null>(""); // Profil resmi durumunu tutar
  const [uploading, setUploading] = useState<boolean>(false); // Yükleme durumunu tutar
  const { user } = useContext(UserContext) || {}; // Kullanıcı bilgilerini context'ten alır

  // Kullanıcı değiştiğinde profil resmini veritabanından çeker
  useEffect(() => {
    if (user) {
      const db = getDatabase();
      const userRef = databaseRef(db, 'users/' + user.uid + '/profilePicture');
      onValue(userRef, (snapshot) => {
        const url = snapshot.val();
        if (url) {
          setProfilePicture(url);
        }
      });
    }
  }, [user]);

  // Profil resmi değiştiğinde çalışır
  const handlePictureChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && user) {
      const storage = getStorage();
      const fileRef = storageRef(storage, `profilePictures/${user.uid}`);
      setUploading(true); // Yükleme başladığında durumu günceller
      try {
        await uploadBytes(fileRef, file); // Dosyayı depolamaya yükler
        const fileURL = await getDownloadURL(fileRef); // Dosya URL'sini alır
        const db = getDatabase();
        await set(databaseRef(db, 'users/' + user.uid + '/profilePicture'), fileURL); // URL'yi veritabanına kaydeder
        setProfilePicture(fileURL); // URL'yi durum olarak ayarlar
      } catch (error) {
        console.error("Error uploading file:", error); // Hata durumunda konsola yazdırır
      }
      setUploading(false); // Yükleme tamamlandığında durumu günceller
    }
  };

  return (
    <div id="info-section" className="info-section">
      <div className="info-container">
        <div className="picture-container">
          <img src={profilePicture as string} alt="Profile" className="profile-picture" /> {/* Profil resmini gösterir */}
          <label htmlFor="change-picture" className="change-picture-button">
            {uploading ? 'Uploading...' : 'Change Picture'} {/* Yükleme durumuna göre metni değiştirir */}
          </label>
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
            <input type="text" className="form-control" placeholder="Username" /> {/* Kullanıcı adı girişi */}
          </div>
          <div className="form-group">
            <label>Email Id</label>
            <input type="email" className="form-control" placeholder="Email Id" /> {/* Email girişi */}
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" className="form-control" placeholder="Phone Number" /> {/* Telefon numarası girişi */}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" /> {/* Şifre girişi */}
          </div>
          <button type="submit" className="btn btn-primary">Update</button> {/* Güncelle butonu */}
        </form>
      </div>
    </div>
  );
};

export default ProfileInfo;
