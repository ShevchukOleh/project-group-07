import styled from '@emotion/styled';

export const ButtonCreateStyle = styled.button`
  width: 335px;
  border-radius: 8px;
  background-color: ${props => {
    return props?.theme?.themeSet?.modalHelpSendBg;
  }};
  padding: 14px 78px 14px 79px;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => {
    return props?.theme?.themeSet?.modalHelpSendBorder;
  }};
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${props => {
      return props?.theme?.themeSet?.modalHelpSendHover;
    }};
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
    background-color: ${props => {
      return props?.theme?.themeSet?.createBtnIconBg;
    }};
    border-radius: 8px;
  }

  & .iconBtn {
    fill: ${props => {
      return props?.theme?.themeSet?.createBtnIcon;
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
      return props?.theme?.themeSet?.modalHelpSendText;
    }};
  }
`;
