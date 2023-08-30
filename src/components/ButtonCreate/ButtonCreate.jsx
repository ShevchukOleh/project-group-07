import React from 'react';
import { ButtonCreateStyle } from './ButtonCreate.styled';
import { RiAddLine } from 'react-icons/ri';

export default function ButtonCreate(props) {
  return (
    <ButtonCreateStyle className="btnAddColumn">
      <div className="containerLogoName">
        <div className="containerIconBtn">
          <RiAddLine className="iconBtn" />
        </div>
        <p className="logoName">{props.text}</p>
      </div>
    </ButtonCreateStyle>
  );
}
