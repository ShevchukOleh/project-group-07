import React, { useState } from 'react';
import { OneBoard } from './Sidebar.styled';

const testBoards = [
  {
    name: 'Project office',
    status: 'black',
  },
  {
    name: 'Naon Light Project',
    status: 'green',
  },
  {
    name: 'My test',
    status: 'red',
  },
  {
    name: 'for test',
    status: 'green',
  },
  {
    name: 'its works!!',
    status: 'red',
  },
];

export const BordInSidebar = () => {
  const [tasks, setTasks] = useState(testBoards);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    const draggedIndex = e.dataTransfer.getData('text/plain');
    const updatedTasks = [...tasks];
    const [draggedTask] = updatedTasks.splice(draggedIndex, 1);
    updatedTasks.splice(dropIndex, 0, draggedTask);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div
          key={index}
          className="task"
          draggable
          onDragStart={e => handleDragStart(e, index)}
          onDragOver={e => handleDragOver(e, index)}
          onDrop={e => handleDrop(e, index)}
        >
          <OneBoard>
            <div style={{ marginRight: '16px' }}>
              <svg width={18} height={18}>
                <use
                  xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-IconProject`}
                />
              </svg>
            </div>
            <div style={{ flex: 1 }}>{task.name}</div>
            <div style={{ marginRight: '8px' }}>
              <svg width={16} height={16}>
                <use
                  xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-pencil-01`}
                />
              </svg>
            </div>
            <div>
              <svg width={16} height={16}>
                <use
                  xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-trash`}
                />
              </svg>
            </div>
          </OneBoard>
        </div>
      ))}
    </div>
  );
};
