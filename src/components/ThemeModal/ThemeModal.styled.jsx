import styled from '@emotion/styled';
import { Button } from '@mui/material';

//const currentTheme = 'light';
export const ThemeBtn = styled(Button)`
  gap: 4px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: ${props => {
    switch (props.currentTheme) {
      case 'light':
        return props.theme?.palette?.primary?.main;
      case 'dark':
        return props.theme?.palette?.secondary?.main;
      default: return '#000';
    }
  }};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  text-transform: none;
  letter-spacing: 0.02em;
  ${props => {
  console.log(props.theme?.palette?.primary?.main);
  console.log(props.theme?.palette?.secondary?.main);
  console.log(props.currenttheme);
  }}
`;

export const ThemeIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: currentColor;
`;
