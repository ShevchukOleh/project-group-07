import styled from '@emotion/styled';

export const BoardStyle = styled.section`
  position: relative;
  width: 375px;

   & .css-1q29n59-MuiButtonBase-root-MuiButton-root {
    position: absolute;
    right: 24px;
    top: 0;
  }
  
  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1180px;
  }

  padding: 14px 20px;
  background-color: #f6f6f7;
  height: calc(100vh - 68px);

  @media screen and (min-width: 768px) {
    padding: 26px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 24px;
  }
  p,
  h2 {
    margin: 0;
    padding: 0;
  }
  & .containerColumns {
    display: flex;
    overflow-x: scroll;

    align-items: start;
    gap:14px;
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
    -webkit-box-shadow: inset 0 0 6px rgba(22, 22, 22, 0.10);
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
    width: 334px;
    min-height: 278px;
    max-height: 100%;
    margin-bottom: 14px;
    overflow-y: hidden;
    overflow-y: scroll;
    flex: 1;
    @media screen and (min-width: 1440px) {
      width: 354px;
    }
  }
  

  & .containerColumnCard::-webkit-scrollbar {
    width: 12px;
  }

  & .containerColumnCard::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(22, 22, 22, 0.10);
    border-radius: 10px;
  }

  & .containerColumnCard::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  ​ & .containerTitle {
    // display: flex;
    // justify-content: space-between;
  }
  & .title {
    color: #161616;
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
`;