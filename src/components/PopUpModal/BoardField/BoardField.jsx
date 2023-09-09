import React from 'react';
import { BoardFieldStyle } from './BoardField.styled';
import { FiArrowRightCircle } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

export default function BoardField({
  onClick,
  item,
  localIndex,
  index,
  boardId,
  columnIdThis,
  cardId,
  createCard,
  deleteCard,
  createOneCard,
}) {
  const isLocalColumn = index === localIndex;
  const dispatch = useDispatch();
  const columnId = item._id;

  return (
    <BoardFieldStyle
      onClick={
        isLocalColumn
          ? null
          : () => {
              dispatch(createOneCard({ boardId, columnId, createCard }));
              dispatch(deleteCard({ boardId, columnId: columnIdThis, cardId }));
              return onClick;
            }
      }
    >
      <p
        className={`columnNamePopUp ${isLocalColumn ? 'localElement' : ''}`}
      >{`${item.title}`}</p>
      <FiArrowRightCircle
        className={`iconPopUp ${isLocalColumn ? 'localElement' : ''}`}
      />
    </BoardFieldStyle>
  );
}
