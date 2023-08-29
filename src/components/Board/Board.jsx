import React from 'react';
import { BoardStyle } from './Board.styled';
import { RiAddLine } from 'react-icons/ri';
import { FiltersModal } from 'components/FiltersModal';

export default function Board({ setIsShowModal }) {
  return (
    <BoardStyle>
      <div className="containerTitle">
        <h2 className="title">Project office</h2>
        <FiltersModal/>
      </div>
      <button className="btnAddColumn" onClick={() => setIsShowModal(true)}>
        <div className="containerLogoName">
          <div className="containerIconBtn">
            <RiAddLine className="iconBtn" />
          </div>
          <p className="logoName">Add another column</p>
        </div>
      </button>
    </BoardStyle>
  );
}
