// src/components/HomeTasks.tsx
import React, { useState, useEffect } from 'react';
import './homeTasks.css';

interface Task {
  key: string;
  summary: string;
  status: string;
  assignee: string;
}

const initialTasks: Task[] = [
  { key: '1', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'TO DO', assignee: 'Fatmanur' },
  { key: '2', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'DONE', assignee: 'Berkin' },
  { key: '3', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'TO DO', assignee: 'Damla' },
  { key: '4', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'TO DO', assignee: 'Selin' },
  { key: '5', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'IN PROGRESS', assignee: 'Kaan' },
  { key: '6', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'IN PROGRESS', assignee: 'Mislina' },
];

const HomeTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleStatusClick = (index: number) => {
    const newTasks = [...tasks];
    const currentStatus = newTasks[index].status;
    let newStatus = 'TO DO';
    if (currentStatus === 'TO DO') {
      newStatus = 'IN PROGRESS';
    } else if (currentStatus === 'IN PROGRESS') {
      newStatus = 'DONE';
    }
    newTasks[index].status = newStatus;
    setTasks(newTasks);
  };

  const handleInputChange = (index: number, field: keyof Task, value: string) => {
    const newTasks = [...tasks];
    newTasks[index][field] = field === 'key' ? value.replace(/[^0-9]/g, '') : value;
    setTasks(newTasks);
  };

  useEffect(() => {
    const sortedTasks = [...tasks].sort((a, b) => parseInt(a.key) - parseInt(b.key));
    setTasks(sortedTasks);
  }, [tasks]);

  return (
    <div id="home-tasks" className="home-tasks">
      <table className="tasks-table">
        <thead>
          <tr>
            <th className="key-header">Key</th>
            <th>Summary</th>
            <th>Status</th>
            <th className="assignee-header">Assignee</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td className="key-cell">
                <div className="key-input-wrapper">
                  <input
                    type="text"
                    value={`#${task.key}`}
                    onChange={(e) => handleInputChange(index, 'key', e.target.value)}
                    className="key-input"
                  />
                </div>
              </td>
              <td className="summary">
                <textarea
                  value={task.summary}
                  onChange={(e) => handleInputChange(index, 'summary', e.target.value)}
                />
              </td>
              <td className={`status ${task.status.toLowerCase().replace(' ', '-')}`} onClick={() => handleStatusClick(index)}>
                {task.status}
              </td>
              <td className="assignee">
                <textarea
                  value={task.assignee}
                  onChange={(e) => handleInputChange(index, 'assignee', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeTasks;
