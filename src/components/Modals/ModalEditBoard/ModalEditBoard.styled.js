import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import DialogActions from '@mui/material/DialogActions';
// import { Radio, FormControlLabel } from '@mui/material';
import {Radio} from '@mui/material';
import {FormControlLabel} from '@mui/material';

// import AddIcon from '@mui/icons-material/Add';

export const ButtonStyled = styled(Button)`
  font-family: 'Poppins';
  background-color: '#BEDBB0';
  color: '#161616';
  font-weight: 500;
  height: 49px;
  width: '100%';
  padding: 0;
  text-transform: 'capitalize';

  &&:hover {
    background-color: '#9DC888';
  }
`;

export const StyledBox = styled(Box)`
  background-color: ${props => {
    return props?.theme?.themeSet?.boxIconBg;
  }};
`;

export const StyledButton = styled(Button)`
  color: ${props => {
    return props?.theme?.themeSet?.modalHelpSendText;
  }};
  transition: background-color, color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${props => {
      return props?.theme?.themeSet?.modalHelpSendHover;
    }};
    color: ${props => {
      return props?.theme?.themeSet?.modalHelpSendHoverText;
    }};
  }

  &:hover > div {
    background-color: ${props => {
      return props?.theme?.themeSet?.boxIconBgHover;
    }};
  }

  &:hover > div > svg {
    fill: ${props => {
      return props?.theme?.themeSet?.iconFillHover;
    }};
  }
`;

export const ContainerModal = styled.div`
  padding: 24px;
  width: 335px;
  height: auto;
  background-color: ${props => {
    return props?.theme?.themeSet?.modalHelpBg;
  }};
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => {
    return props?.theme?.themeSet?.modalHelpBorder;
  }};

  @media screen and (max-width: 375px) {
    max-width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const ErrorTextWrap = styled.div`
  color: ${props => {
    return props?.theme?.themeSet?.modalHelpTitle;
  }};
`;

export const FormControlLabelStyled = styled(FormControlLabel)`
  margin: 0px;
`;

export const IconContainer = styled(RadioGroup)`
  display: flex;
  gap: 8px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: ${props => {
    return props?.theme?.themeSet?.modalHelpBg;
}};
  
`;

export const RadioStyled = styled(Radio)`
  width: 18px;
  height: 18px;
  padding: 0px;
`;

export const RadioStyledImg = styled(Radio)`
  width: 28px;
  height: 28px;
  padding: 0px;
`;

export const ImageBgContainer = styled(RadioGroup)`
  padding-right: 28px;
  padding-left: 16px;
  display: flex;
  gap: 4px;
  margin-bottom: 40px;
  width: 100%;
  background-color: ${props => {
    return props?.theme?.themeSet?.modalHelpBg;
  }};
`;

export const DialogActionsStyled = styled(DialogActions)`
  align-items: center;
  justify-content: center;
  padding: 0px;
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  fill: ${props => {
    return props?.theme?.themeSet?.iconFill;
  }};
`;

export const Image = styled.img`
  width: 28px;
  height: 28px;
`;

export const TextFieldStyled = styled.input`
  color: ${props => {
    return props?.theme?.themeSet?.inputColor;
  }};
  background-color: ${props => {
    return props?.theme?.themeSet?.inputBgColor;
  }};
  border: 1px solid
    ${props => {
      return props?.theme?.themeSet?.inputOtherBorder;
    }};
  border-radius: 8px;
  outline: none;
  height: 49px;
  width: 100%;
  margin-bottom: 24px;
  padding-left: 18px;

  ::placeholder {
    color: ${props => {
      return props?.theme?.themeSet?.inputPlaceholder;
    }};
  }

  // &&:focus {
  // border: 1px solid #161616;
  // };
  
  &:hover {
    border: 1px solid
      ${props => {
        return props?.theme?.themeSet?.inputOtherHover;
      }};
  }
`;