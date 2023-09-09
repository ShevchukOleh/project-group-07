import styled from '@emotion/styled';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const StyledBaseBtn = styled(Button)`
  display: flex;
  gap: 8px;
  width: 100%;
  height: 49px;
  border-radius: 8px;
  background-color: ${props => {
    return props?.theme?.themeSet?.modalHelpSendBg;
  }};
  transition: background-color var(--tra);

  &:hover {
    background-color: ${props => {
      return props?.theme?.themeSet?.modalHelpSendHover;
    }};
`;

export const StyledIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background-color: ${props => {
    return props?.theme?.themeSet?.boxIconBg;
  }};
`;

export const StyledAddIcon = styled(AddIcon)`
  width: 14px;
  height: 14px;
  fill: ${props => {
    return props?.theme?.themeSet?.iconFill;
  }};
`;

export const StyledBtnLabel = styled.p`
  color: ${props => {
    return props?.theme?.themeSet?.modalHelpSendText;
  }};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-transform: capitalize;
`;
