import React from 'react';
import { BoardCardStyle } from './BoardCard.styled';
import { FiTrash, FiEdit2, FiArrowRightCircle } from 'react-icons/fi';

export default function BoardCard() {
  return (
    <BoardCardStyle>
      <h3 className=" title">The Watch Spot Design</h3>
      <p className="description clip">
        Create a visually stunning and eye-catching watch dial design that
        embodies our brand's essence of sleek aesthetics and modern elegance.
        Your design should be unique, innovative, and reflective of the latest
        trends in watch design.
      </p>
      <hr></hr>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
        <div>
          <span className="priorityTitle">Priority</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span className="priorityColor"></span>
            <span className="priorityText">Low</span>
          </div>
        </div>
        <div>
          <span className="priorityTitle">Deadline</span>
          <div>
            <span className="priorityText">12/05/2023</span>
          </div>
        </div>
      </div>
      <div className="containerCardIcon">
        <FiArrowRightCircle
          style={{ cursor: 'pointer', color: 'rgba(16, 16, 16, 0.5)' }}
        />
        <FiEdit2
          style={{ cursor: 'pointer', color: 'rgba(16, 16, 16, 0.5)' }}
        />
        <FiTrash
          style={{ cursor: 'pointer', color: 'rgba(16, 16, 16, 0.5)' }}
        />
      </div>
    </BoardCardStyle>
  );
}
