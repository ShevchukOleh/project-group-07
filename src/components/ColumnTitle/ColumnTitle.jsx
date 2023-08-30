import React from 'react';
import { ColumnTitleStyle } from './ColumnTitle.styled';
import { FiTrash, FiEdit2 } from 'react-icons/fi';

export default function ColumnTitle(params) {
  return (
    <ColumnTitleStyle>
      <p className="titleColumn">{params.text}</p>
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          display: 'flex',
          gap: '8px',
        }}
      >
        <FiEdit2
          style={{ cursor: 'pointer', color: 'rgba(16, 16, 16, 0.5)' }}
        />
        <FiTrash
          style={{ cursor: 'pointer', color: 'rgba(16, 16, 16, 0.5)' }}
        />
      </div>
    </ColumnTitleStyle>
  );
}
