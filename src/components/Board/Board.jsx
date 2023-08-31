import React from 'react';
import { useSelector } from 'react-redux';
import { selectBoards } from 'store/createSlices/board/boardSelectors';

import ButtonCreate from 'components/ButtonCreate/ButtonCreate';
import { BoardStyle } from './Board.styled';
import BoardCard from 'components/BoardCard/BoardCard';
import ColumnTitle from 'components/ColumnTitle/ColumnTitle';
import { FiltersModal } from 'components/FiltersModal';

export default function Board({ setIsShowModal }) {
  const boards = useSelector(selectBoards);
  return (
    <BoardStyle>
      {boards.length !== 0 && (
        <div className="containerTitle">
          <h2 className="title">Project office</h2>
        </div>
      )}

      <FiltersModal />
      {boards.length !== 0 && (
        <div className="containerColumns">
          <div className="containerOneColumn">
            <ColumnTitle text={'To Do'} />
            <div className="containerColumnCard">
              <BoardCard />
              <BoardCard />
              <BoardCard />
              <BoardCard />
            </div>
            <ButtonCreate
              text="Add another card"
              onClick={() => setIsShowModal(true)}
            />
          </div>
          <div className="containerOneColumn">
            <ColumnTitle text={'In progress'} />
            <div className="containerColumnCard">
              <BoardCard />
              <BoardCard />
              <BoardCard />
              <BoardCard />
            </div>
            <ButtonCreate
              text="Add another card"
              onClick={() => setIsShowModal(true)}
            />
          </div>
          <div className="containerOneColumn">
            <ColumnTitle text={'Done'} />
            <div className="containerColumnCard">
              <BoardCard />
              <BoardCard />
              <BoardCard />
              <BoardCard />
            </div>
            <ButtonCreate
              text="Add another card"
              onClick={() => setIsShowModal(true)}
            />
          </div>
          <div>
            <ButtonCreate
              text="Add another column"
              onClick={() => setIsShowModal(true)}
            />
          </div>
        </div>
      )}
    </BoardStyle>
  );
}
