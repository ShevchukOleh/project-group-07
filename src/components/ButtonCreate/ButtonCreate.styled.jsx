import styled from '@emotion/styled';

export const ButtonCreateStyle = styled.button`
  width: 335px;
  border-radius: 8px;
  background-color: ${props => {
    return props?.theme?.themeSet?.addColumnBtnBg;
  }};
  padding: 14px 78px 14px 79px;
  border: none;
  cursor: pointer;

  & .containerLogoName {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  & .containerIconBtn {
    width: 28px;
    height: 28px;
    background-color: ${props => {
      return props?.theme?.themeSet?.addColumnIconBox;
    }};
    border-radius: 8px;
  }

  & .iconBtn {
    fill: ${props => {
      return props?.theme?.themeSet?.addColumnIcon;
    }};
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
    color: ${props => {
      return props?.theme?.themeSet?.addColumnText;
    }};
  }
`;
