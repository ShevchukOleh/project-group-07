import styled from '@emotion/styled';

export const BoardStyle = styled.section`
  position: relative;
  max-width: 375px;

  @media screen and (min-width: 768px) {
    padding: 26px 32px;
    max-width: 1439px;
  }

  @media screen and (min-width: 1440px) {
    width: 1180px;
    padding: 10px 24px;
    padding-top: 32px;
  }

  padding: 14px 20px;
  height: calc(100vh - 68px);

  p,
  h2 {
    margin: 0;
    padding: 0;
  }

  & .containerColumns {
    display: flex;
    overflow-x: scroll;

    align-items: start;
    gap: 14px;
    margin-top: 40px;

    @media screen and (min-width: 768px) {
      margin-top: 26px;
    }

    @media screen and (min-width: 1440px) {
      margin-top: 10px;
      height: calc(100vh - 110px);
      padding-bottom: 16px;
    }
  }

  & .containerColumns::-webkit-scrollbar {
    width: 12px;
  }

  & .containerColumns::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(22, 22, 22, 0.1);
    border-radius: 10px;
  }

  & .containerColumns::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }

  & .containerOneColumn {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  & .containerColumnCard {
    max-height: calc(100vh - 334px);
    margin-bottom: 14px;
    overflow-y: hidden;
    overflow-y: scroll;

    @media screen and (min-width: 768px) {
      max-height: calc(100vh - 384px);
    }

    @media screen and (min-width: 1440px) {
      width: 354px;
      max-height: calc(100vh - 292px);
    }
  }

  & .containerColumnCard::-webkit-scrollbar {
    width: 12px;
  }

  & .containerColumnCard::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(22, 22, 22, 0.1);
    border-radius: 10px;
  }

  & .containerColumnCard::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }

  & .containerTitle {
    position: absolute;
    width: max-content;
    padding: 2px 10px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    top: 14px;
    left: 20px;
    @media screen and (min-width: 768px) {
      top: 14px;
      left: 32px;
    }
    @media screen and (min-width: 1440px) {
      top: 10px;
      left: 24px;
    }
  }

  & .title {
    /* color: ${props => {
      return props?.theme?.themeSet?.boardTitle;
    }}; */
    color: black;

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.28px;

    @media screen and (min-width: 768px) {
      font-size: 18px;
      letter-spacing: -0.36px;
    }
  }

  & .containerIcon {
    position: absolute;
    top: 14px;
    right: 20px;

    @media screen and (min-width: 768px) {
      top: 20px;
      right: 32px;
    }

    @media screen and (min-width: 1440px) {
      top: 14px;
      right: 24px;
    }

    margin-left: auto;
    display: flex;
    gap: 6px;
    align-items: center;
  }

  & .filters {
    color: rgba(22, 22, 22, 0.8);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
    cursor: pointer;
  }

  & .filtersPosition {
    position: absolute;
    top: 14px;
    right: 20px;
    @media screen and (min-width: 768px) {
      top: 14px;
      right: 32px;
    }
    @media screen and (min-width: 1440px) {
      top: 10px;
      right: 24px;
    }
  }

  & .emptyBoard {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 40px);

    color: ${props => {
      return props?.theme?.themeSet?.boardEmptyText;
    }};
    text-align: center;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.24px;

    @media screen and (min-width: 768px) {
      width: 435px;
      text-align: match-paren;
      font-size: 14px;
      font-style: normal;
      line-height: 18px;
      letter-spacing: -0.28px;
    }
  }
`;
export const ButtonCreateCard = styled.button`
  width: 335px;
  border-radius: 8px;
  background-color: ${props => {
    return props?.theme?.themeSet?.sidebarCreateBtnBg;
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
