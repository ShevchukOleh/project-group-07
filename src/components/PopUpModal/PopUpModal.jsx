import React from 'react';
import { PopUpModalStyle } from './PopUpModal.styled';
import BoardField from './BoardField/BoardField';
import { useSelector } from 'react-redux';
import { selectColumns } from 'store/createSlices/board/boardSelectors';
import { deleteCard, createOneCard } from 'store/AsyncThunk/asyncThunkBoards';

const PopUpModal = ({ hideModal, columnId, boardId, cardId, card }) => {
  const clickbtn = event => {
    if (event.target !== event.currentTarget) {
      hideModal();
    }
  };
  const columns = useSelector(selectColumns);
  const index = columns.findIndex(item => item._id === columnId);
  return (
    <PopUpModalStyle>
      {columns.map((item, i) => (
        <BoardField
          key={item._id}
          onClick={clickbtn}
          item={item}
          localIndex={index}
          index={i}
          deleteCard={deleteCard}
          createOneCard={createOneCard}
          columnIdThis={columnId}
          boardId={boardId}
          cardId={cardId}
          createCard={card}
        />
      ))}
    </PopUpModalStyle>
  );
};

export default PopUpModal;
