import styled from '@emotion/styled';
import { Button } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export const StyledCloseBtn = styled(Button)`
  position: absolute;
  top: 10px;
  right: 8px;
  min-width: 18px;
  height: 18px;
  padding: 0;
`;

export const StyledCloseIcon = styled(CloseOutlinedIcon)`
  width: 18px;
  height: 18px;
  fill: ${props => {
    return props?.theme?.themeSet?.modalFiltersTitle;
  }};

  &:hover {
    transform: scale(1.1);
    fill: red;
  }
`;
