import React, { useEffect, useState } from 'react';
import { BoardCardStyle } from './BoardCard.styled';
import { FiTrash, FiEdit2, FiArrowRightCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import {
  selectMyCards,
  selectedInPriority,
} from 'store/createSlices/board/boardSelectors';

export default function BoardCard() {
  const selectPriority = useSelector(selectedInPriority);
  const selectCards = useSelector(selectMyCards);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(selectCards);
  }, [selectPriority, selectCards]);
  return (
    <>
      {cards.map((item, index) => (
        <BoardCardItem key={index} card={item} />
      ))}
    </>
  );
}

function BoardCardItem({ card }) {
  return (
    <BoardCardStyle>
      <h3 className="title">{card.title}</h3>
      <p className="description clip">{card.description}</p>
      <hr />
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
        <div>
          <span className="priorityTitle">Priority</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span className="priorityColor"></span>
            <span className="priorityText">{card.priority}</span>
          </div>
        </div>
        <div>
          <span className="priorityTitle">Deadline</span>
          <div>
            <span className="priorityText">{card.deadline}</span>
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
