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
  const currentArr = columns.slice(index);
  return (
    <PopUpModalStyle>
      {currentArr.map((item, i) => (
        <BoardField
          key={item._id}
          onClick={clickbtn}
          item={item}
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
