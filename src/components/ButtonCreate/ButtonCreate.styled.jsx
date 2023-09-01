import styled from '@emotion/styled';

export const ButtonCreateStyle = styled.button`
  width: 335px;

  border-radius: 8px;
  background: #fff;
  padding: 14px 78px 14px 79px;
  outline: none;
  border: 0;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #bedbb0;
  }
  & .containerLogoName {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  & .containerIconBtn {
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
  & .logoName {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #161616;
  }
`;
