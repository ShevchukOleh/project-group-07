import React from 'react';
import { useSelector } from 'react-redux';
import { selectBoards } from 'store/createSlices/board/boardSelectors';

import ButtonCreate from 'components/ButtonCreate/ButtonCreate';
import { BoardStyle } from './Board.styled';
import { RiFilter2Line } from 'react-icons/ri';

export default function Board({ setIsShowModal }) {
  const boards = useSelector(selectBoards);
  return (
    <BoardStyle>
      {boards.length !== 0 && (
        <div className="containerTitle">
          <h2 className="title">Project office</h2>
        </div>
      )}
      {boards.length !== 0 && (
        <ButtonCreate
          text="Add another column"
          onClick={() => setIsShowModal(true)}
        />
      )}
      <div className="containerIcon">
        <RiFilter2Line style={{ fill: 'rgba(22, 22, 22, 0.80)' }} />
        <p className="filters" onClick={() => setIsShowModal(true)}>
          Filters
        </p>
      </div>
    </BoardStyle>
  );
}
