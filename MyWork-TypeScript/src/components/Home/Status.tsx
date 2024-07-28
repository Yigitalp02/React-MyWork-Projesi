// src/components/Status.tsx
import React from 'react';
import './status.css';

const Status: React.FC = () => {
  return (
    <div id="status-section" className="status-section">
      <h2>Status</h2>
      <table>
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Home Page Redesign</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td>In Progress</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Status;
