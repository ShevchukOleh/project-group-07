import styled from 'styled-components';

export const BoardStyle = styled.section`
  position: relative;
  padding: 14px 20px;
  background-color: #f6f6f7;
  height: calc(100vh - 68px);

  @media screen and (min-width: 768px) {
    padding: 26px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 24px;
  }
  p,
  h2 {
    margin: 0;
    padding: 0;
  }
  & .containerTitle {
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
