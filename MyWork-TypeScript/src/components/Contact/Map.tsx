import React from 'react';
import './contact.css';
import map from '../icons/Map.png';

const Map: React.FC = () => {
  return (
    <div className="map-image-container">
      <img src={map} alt="Company Location" className="img-fluid map-image" />
    </div>
  );
};

export default Map;
