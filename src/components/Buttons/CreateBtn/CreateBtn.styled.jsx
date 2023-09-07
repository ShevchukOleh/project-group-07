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
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${props => {
      return props?.theme?.themeSet?.sidebarCreateBtnBgHover;
    }};
  }
`;

export const StyledAddIcon = styled(AddIcon)`
  width: 20px;
  height: 20px;
  fill: ${props => {
    return props?.theme?.themeSet?.iconPlus;
  }};
`;
