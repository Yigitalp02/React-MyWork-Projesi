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
            <th className="task-title">Task Title</th>
            <th className="task-desc">Task Description</th>
            <th className="task-status">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="task-title">Home Page Redesign</td>
            <td className="task-desc">Lorem ipsum dolor sit amet</td>
            <td className="task-status status-desc">In Progress</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Status;
