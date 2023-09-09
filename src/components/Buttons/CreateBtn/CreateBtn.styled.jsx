import styled from '@emotion/styled';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const StyledCreateBtn = styled(Button)`
  min-width: 40px;
  height: 36px;
  border-radius: 8px;
  background-color: ${props => {
    return props?.theme?.themeSet?.sidebarCreateBtnBg;
  }};
  transition: background-color var(--tra);

  &:hover {
    background-color: ${props => {
      return props?.theme?.themeSet?.sidebarCreateBtnBgHover;
    }};
  }
`;

export const StyledAddIconBig = styled(AddIcon)`
  width: 20px;
  height: 20px;
  fill: ${props => {
    return props?.theme?.themeSet?.iconPlus;
  }};
`;
