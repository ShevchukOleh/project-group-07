import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  min-width: 320px;
  width: 375px;
  height: 60px;
  padding: 14px 24px;
  background-color: ${props => {
    return props?.theme?.themeSet?.headerBg;
  }};
  @media screen and (min-width: 768px) {
    width: 768px;
    height: 68px;
    padding: 18px 24px;
  }

  @media screen and (min-width: 1440px) {
    display: block;
    width: 1180px;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: end;
`;

export const UserInfoBtn = styled(Button)`
  gap: 8px;
  padding-top: 0;
  padding-bottom: 0;
  color: #161616;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  text-transform: none;
  letter-spacing: 0.02em;
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 5px;
  overflow: hidden;
  background-color: tomato;
`;
