import styled from 'styled-components';

export const WelcomePageStyle = styled.div`
  padding: 211px 20px;
  max-width: 100%;
  background-color: #b6d9af;
  background-image: linear-gradient(0deg, #b6d9af 0%, #ffffff 100%);
  @media screen and (min-width: 375px) {
    max-width: 375px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 293px 147px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 166px 483px;
  }
  text-align: center;

  & h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    padding: 0;
    margin: 0;
  }
  & img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 14px;
    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
    }
  }

  & .iconUser {
  }
  & .containerIcon {
    max-width: 40px;
    height: 40px;
    @media screen and (min-width: 768px) {
      min-width: 44px;
      height: 44px;
    }
    background-color: #000000;
    border-radius: 8px;
  }
  & .icon {
    fill: white;
    width: 15px;
    height: 20px;
    margin: 10px 12.5px;

    @media screen and (min-width: 768px) {
      width: 18px;
      height: 24px;
    }
  }
  & use {
    padding: 0;
    margin: 0;
  }

  & .containerLogoName {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    margin-bottom: 24px;
  }
  & .logoName {
    font-family: 'poppins';
    font-weight: 600;
    font-size: 28px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -1.12px;

    color: #161616;

    @media screen and (min-width: 768px) {
      font-size: 40px;
      letter-spacing: -1.6px;
    }
  }
  & .description {
    font-family: 'poppins';
    font-weight: 400;
    margin-bottom: 48px;
    max-width: 335px;
    @media screen and (min-width: 768px) {
      max-width: 473px;
    }

    font-size: 14px;
    text-align: center;
    line-height: 1.28;
    color: #161616;
  }
  & .btn {
    font-family: 'poppins';
    font-weight: 500;
    width: 100%;
    @media screen and (min-width: 768px) {
      width: 344px;
    }
    padding: 14px 0px;
    margin-bottom: 14px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.28px;
    background-color: #161616;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  & .btn:hover {
    background-color: #000000;
  }
  & .linkLogin {
    font-family: 'poppins';
    font-weight: 500;
    display: block;
    text-decoration: none;
    color: #000000;
    color: #161616;
    font-size: 14px;
    letter-spacing: -0.28px;
  }
`;
