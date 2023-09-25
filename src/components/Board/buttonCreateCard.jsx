import React from 'react';
import { RiAddLine } from 'react-icons/ri';
import { ButtonCreateCard } from './Board.styled';

export default function ButtonCardCreate(props) {
  return (
    <ButtonCreateCard onClick={props.onClick} className="btnAddColumn">
      <div className="containerLogoName">
        <div className="containerIconBtn">
          <RiAddLine className="iconBtn" />
        </div>
        <p className="logoName">{props.text}</p>
      </div>
    </ButtonCreateCard>
  );
}
