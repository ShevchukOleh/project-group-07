import styled from '@emotion/styled';
import {
  Button,
  Menu,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

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
`;

export const ThemeIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: currentColor;
`;

export const StyledMenu = styled(Menu)`
  & ul {
    padding: 0;
  }

  & ul > div {
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => {
      return props?.theme?.themeSet?.modalThemeBorder;
    }};
    box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  }
`;

export const Wrapper = styled.div`
  background-color: ${props => {
    return props?.theme?.themeSet?.modalThemeBg;
  }};
`;

export const StyledFormControl = styled(FormControl)`
  width: 100px;
  height: 107px;
  justify-content: center;
`;

export const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  gap: 4px;
  justify-content: normal;
  align-content: center;

  & label .MuiTypography-root {
    font-family: Poppins;
    font-size: 14px;
  }

  & label .MuiButtonBase-root {
    visibility: hidden;
  }
`;

const themeBtnColor = ( themestatus, theme ) =>
  themestatus
    ? theme?.themeSet?.modalThemeTitleFocus
    : theme?.themeSet?.modalThemeTitle;

export const StyledFormControlLabel = styled(FormControlLabel)`
  margin-left: 0;
  justify-content: flex-end;
  max-width: 100px;

  & .MuiTypography-root {
    color: ${({ themestatus, theme }) => themeBtnColor(themestatus, theme)};
  }
`;

export const StyledRadio = styled(Radio)`
  padding: 0;
  width: 1;
  height: 1;
`;
