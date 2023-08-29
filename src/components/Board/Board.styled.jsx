import styled from 'styled-components';

export const BoardStyle = styled.section`
  padding: 14px 20px;
  background-color: #f6f6f7;
  height: calc(100vh - 68px );

  @media screen and (min-width: 768px) {padding: 26px 32px; }

  @media screen and (min-width: 1440px) {padding: 10px 24px; }
  p,
  h2 {
    margin: 0;
    padding: 0;
  }
  & .containerTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .title{
    color: #161616;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.28px;

    @media screen and (min-width: 768px) { 
    font-size: 18px;
    letter-spacing: -0.36px;}

  }
  & .containerIcon {
    margin-left: auto;
    display: flex;
    gap: 6px;
    align-items: center;
  }
  & .filters{
    color: rgba(22, 22, 22, 0.80);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  }
  & .btnAddColumn {
    margin-top: 40px;
    width: 335px;
    border-radius: 8px;
    background: #fff;
    padding: 14px 78px 14px 79px;
    outline: none;
    border: 0;
    cursor: pointer;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width: 768px) {margin-top: 26px;}
    @media screen and (min-width: 1440px) {margin-top: 10px;}

  }
  & .btnAddColumn:hover{
    background: #BEDBB0;;
  }
  & .containerIconBtn{
    width: 28px;
    height: 28px;
    background-color: #000000;
    border-radius: 8px;
  }
   & .iconBtn {
    fill: white;
    width: 14px;
    height: 14px;
    margin: 7px;

  }
 

  & .containerLogoName {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  & .logoName {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #161616;

`;
