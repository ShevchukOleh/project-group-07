import React from 'react';
import { BoardFieldStyle } from './BoardField.styled';
import { FiArrowRightCircle } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

export default function BoardField({
  onClick,
  item,
  index,
  boardId,
  columnIdThis,
  cardId,
  createCard,
  deleteCard,
  createOneCard,
}) {
  const isFirstElement = index === 0;
  const dispatch = useDispatch();
  const columnId = item._id;

  return (
    <BoardFieldStyle>
      <p
        className={`columnNamePopUp ${isFirstElement ? 'firstElement' : ''}`}
      >{`${item.title}`}</p>
      <FiArrowRightCircle
        className={`iconPopUp ${isFirstElement ? 'firstElement' : ''}`}
        onClick={
          isFirstElement
            ? null
            : () => {
                dispatch(createOneCard({ boardId, columnId, createCard }));
                dispatch(
                  deleteCard({ boardId, columnId: columnIdThis, cardId })
                );
                return onClick;
              }
        }
      />
    </BoardFieldStyle>
  );
}
