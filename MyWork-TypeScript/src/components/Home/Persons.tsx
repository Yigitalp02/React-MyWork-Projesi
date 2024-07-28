// src/components/Persons.tsx
import React from 'react';
import './persons.css';

const Persons: React.FC = () => {
  return (
    <div id="persons-section" className="persons-section">
      <h2>Persons</h2>
      <ul>
        <li>Cüneyt</li>
        <li>Bayram</li>
        <li>Ali</li>
        <li>Gökhan</li>
        <li>Yahya</li>
      </ul>
    </div>
  );
};

export default Persons;
