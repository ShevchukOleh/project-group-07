import React, { useState, useEffect, useMemo } from 'react';
import { BoardCardStyle } from './BoardCard.styled';
import { FiTrash, FiEdit2, FiArrowRightCircle, FiBell } from 'react-icons/fi';

import { useDispatch } from 'react-redux';
import { deleteCard, editCardById } from 'store/AsyncThunk/asyncThunkBoards';

// export default function BoardCard({ boardId, columnId, card }) {
//   const dispatch = useDispatch();

import { useSelector } from 'react-redux';
// import {
//   selectMyCards,
//   selectedInPriority,
// } from 'store/createSlices/board/boardSelectors';
import { getTheme } from 'constants';
import { getCurrentUser } from 'store/createSlices/userAuth/userSelectors';
import CardFormDialog from 'components/CardModal/EditCardModal';
import PopUpModal from 'components/PopUpModal/PopUpModal';
import BackDrop from 'components/BackDrop/BackDrop';

export default function BoardCard({ boardId, columnId, card }) {
  // const selectPriority = useSelector(selectedInPriority);
  // const selectCards = useSelector(selectMyCards);
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
  const dispatch = useDispatch();
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

  let inputDate = new Date(card.deadline);
  const currentDate = new Date();

  if (inputDate.getTime() === 0) {
    inputDate = currentDate;
  }

  const day = inputDate.getUTCDate();
  const month = inputDate.getUTCMonth() + 1;
  const year = inputDate.getUTCFullYear();

  const formattedDate = `${day.toString().padStart(2, '0')}/${month
    .toString()
    .padStart(2, '0')}/${year}`;

  const inputString = card.priority;

  const firstChar = inputString.charAt(0).toUpperCase();
  const restOfString = inputString.slice(1).toLowerCase();

  const resultString = firstChar + restOfString;
  const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);

  const toggleDescription = () => {
    setDescriptionExpanded(!isDescriptionExpanded);
  };
  // const [selectedColumnId, setSelectedColumnId] = useState(null);
  const [setSelectedColumnId] = useState(null);
  const [isModalCardOpen, setIsModalCardOpen] = useState(false);
  const openModalCard = columnId => {
    setSelectedColumnId(columnId);
    // console.log('SelectedColumnId: ', selectedColumnId);
    setIsModalCardOpen(true);
  };
  const closeModalCard = () => {
    setIsModalCardOpen(false);
  };

  //pop up
  const [isShowTransferModal, setIsShowTransferModal] = useState(false);
  const hideModal = () => {
    setIsShowTransferModal(false);
  };

  //bell
  const [isDeadline, setIsDeadline] = useState(false);
  const [colorBell, setColorBell] = useState('');
  const inputDateChek = inputDate;
  const todayDateChek = useMemo(() => {
    return new Date();
  }, []);
  inputDateChek.setHours(0, 0, 0, 0);
  todayDateChek.setHours(0, 0, 0, 0);

  useEffect(() => {
    if (inputDateChek.getTime() < todayDateChek.getTime()) {
      setIsDeadline(true);
      setColorBell('red');
    } else if (inputDateChek.getTime() === todayDateChek.getTime()) {
      setIsDeadline(true);
      setColorBell('#BEDBB0');
    } else setIsDeadline(false);
  }, [inputDateChek, todayDateChek]);

  return (
    <BoardCardStyle priorityColor={priorityColor(card.priority.toLowerCase())}>
      <h3 className="title">{card.title}</h3>
      <p
        className={`description ${isDescriptionExpanded ? 'expanded' : 'clip'}`}
        onClick={toggleDescription}
      >
        {card.description}
      </p>
      <hr />
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
        <div>
          <span className="priorityTitle">Priority</span>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              marginTop: '4px',
            }}
          >
            <span
              className="priorityColor"
              style={{
                backgroundColor: priorityColor(card.priority.toLowerCase()),
              }}
            ></span>

            <span className="priorityText">{resultString}</span>
          </div>
        </div>

        <div>
          <span className="priorityTitle">Deadline</span>

          <div>
            <span className="priorityText">{formattedDate}</span>
          </div>
        </div>
      </div>
      <div className="containerCardIcon">
        {isDeadline && (
          <FiBell
            style={{
              color: colorBell,
            }}
          />
        )}
        <FiArrowRightCircle
          style={{
            cursor: 'pointer',
            color: theme?.themeSet?.cardPriorityIcon,
          }}
          onClick={() => setIsShowTransferModal(true)}
        />

        <FiEdit2
          style={{
            cursor: 'pointer',
            color: theme?.themeSet?.cardPriorityIcon,
          }}
          onClick={() => openModalCard(columnId)}
        />

        <FiTrash
          // style={{ cursor: 'pointer', fill: theme?.themeSet?.cardPriorityIcon }}
          onClick={() =>
            dispatch(deleteCard({ boardId, columnId, cardId: card._id }))
          }
          style={{
            cursor: 'pointer',
            color: theme?.themeSet?.cardPriorityIcon,
          }}
        />
        <CardFormDialog
          titleText={'Edit card'}
          btnText={'Edit'}
          requestFunction={editCardById}
          boardId={boardId}
          columnId={columnId}
          cardId={card._id}
          isShowModal={isModalCardOpen}
          hideModal={closeModalCard}
        />
      </div>
      {isShowTransferModal && (
        <BackDrop hideModal={hideModal}>
          <PopUpModal
            boardId={boardId}
            columnId={columnId}
            cardId={card._id}
            hideModal={hideModal}
            card={card}
          ></PopUpModal>
        </BackDrop>
      )}
    </BoardCardStyle>
  );
}
