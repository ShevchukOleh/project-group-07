import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const ThemeBtn = styled(Button)`
  gap: 4px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: ${props => {
    return props?.theme?.themeSet?.modalThemeLabel;
  }};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  text-transform: none;
  letter-spacing: 0.02em;
  }}
`;

export const ThemeIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: currentColor;
`;

export const Wrapper = styled.div`
  background-color: ${props => {
    return props?.theme?.themeSet?.modalThemeBg;
  }};
`;
