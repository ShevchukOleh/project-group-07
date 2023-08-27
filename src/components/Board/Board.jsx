import React from 'react';
import { BoardStyle } from './Board.styled';
import { RiFilter2Line, RiAddLine } from 'react-icons/ri';

export default function Board() {
  return (
    <BoardStyle>
      <div className="containerTitle">
        <h2 className="title">Project office</h2>
        <div className="containerIcon">
          <RiFilter2Line style={{ fill: 'rgba(22, 22, 22, 0.80)' }} />
          <p className="filters">Filters</p>
        </div>
      </div>
      <button className="btnAddColumn">
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
