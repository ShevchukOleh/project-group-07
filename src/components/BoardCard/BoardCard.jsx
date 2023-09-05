import React, { useEffect, useState } from 'react';
import { BoardCardStyle } from './BoardCard.styled';
import { FiTrash, FiEdit2, FiArrowRightCircle } from 'react-icons/fi';

import { useDispatch } from 'react-redux';
import { deleteCard } from 'store/AsyncThunk/asyncThunkBoards';

// export default function BoardCard({ boardId, columnId, card }) {
//   const dispatch = useDispatch();

import { useSelector } from 'react-redux';
import {
  selectMyCards,
  selectedInPriority,
} from 'store/createSlices/board/boardSelectors';
import { getTheme } from 'constants';
import { getCurrentUser } from 'store/createSlices/userAuth/userSelectors';

export default function BoardCard({ boardId, columnId, card }) {
  const selectPriority = useSelector(selectedInPriority);
  const selectCards = useSelector(selectMyCards);
  // const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   setCards(selectCards);
  // }, [selectPriority, selectCards]);

  return (
    <>
      {/* {cards.map((item, index) => ( */}
      <BoardCardItem boardId={boardId} columnId={columnId} card={card} />
      {/* ))} */}
    </>
  );
}

function BoardCardItem({ boardId, columnId, card }) {
  const user = useSelector(getCurrentUser);
  const currentTheme = user?.theme || 'Light';

  const theme = getTheme(currentTheme);

  const withoutPriorityColor = theme?.themeSet?.modalFiltersMarkWithoutPr;
  const lowPriorityColor = '#8FA1D0';
  const mediumPriorityColor = '#E09CB5';
  const highPriorityColor = '#BEDBB0';

  const priorityColor = priority => {
    switch (priority) {
      case 'low':
        return lowPriorityColor;
      case 'medium':
        return mediumPriorityColor;
      case 'high':
        return highPriorityColor;
      default:
        return withoutPriorityColor;
    }
  };

  return (
    <BoardCardStyle>
      <h3 className="title">{card.title}</h3>
      <p className="description clip">{card.description}</p>
      <hr />
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
        <div>
          <span className="priorityTitle">Priority</span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span
              className="priorityColor"
              style={{ backgroundColor: priorityColor(card.priority) }}
            ></span>

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
          style={{ cursor: 'pointer', fill: theme?.themeSet?.cardPriorityIcon }}
        />

        <FiEdit2
          style={{ cursor: 'pointer', fill: theme?.themeSet?.cardPriorityIcon }}
        />

        <FiTrash
          onClick={() =>
            dispatch(deleteCard({ boardId, columnId, cardId: card._id }))
          }
          style={{ cursor: 'pointer', color: 'rgba(16, 16, 16, 0.5)' }}

          //           style={{ cursor: 'pointer', fill: theme?.themeSet?.cardPriorityIcon }}
        />
      </div>
    </BoardCardStyle>
  );
}
