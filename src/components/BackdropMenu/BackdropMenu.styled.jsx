import styled from '@emotion/styled';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const MenuBtn = styled(Button)`
  width: 32px;
  height: 32px;
  padding: 0;
  justify-content: center;
  min-width: 32px;
  color: #161616;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const MenuIconNav = styled(MenuIcon)`
  width: 32px;
  height: 32px;
  fill: currentColor;
`;

export const Wrapper = styled.div`
  display: block;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
