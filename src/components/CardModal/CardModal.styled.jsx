import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import RadioGroup from '@mui/material/RadioGroup';
import DialogActions from '@mui/material/DialogActions';
import { Radio, FormControlLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { RiAddLine } from 'react-icons/ri';

export const ButtonStyled = styled(Button)`
  fontfamily: 'Poppins';
  backgroundcolor: '#BEDBB0';
  color: '#161616';
  fontweight: 500;
  height: 49px;
  width: '100%';
  padding: 0;
  texttransform: 'capitalize';

  &:hover {
    backgroundcolor: '#9DC888';
  }
`;

export const DatePickerStyled = styled(DatePicker)`
  width: '127px';
  & DatePicker {
    color: ${props => {
    return props?.theme?.themeSet?.calendar;
  }};
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

// export const LightModeIcon =

export const FormControlLabelStyled = styled(FormControlLabel)`
  margin: 0px;
`;

export const IconContainer = styled(RadioGroup)`
  display: flex;
  gap: 8px;
`;

export const RadioStyled = styled(Radio)`
  width: 18px;
  height: 18px;
  margin: 0px;
`;

export const RadioStyledImg = styled(Radio)`
  width: 28px;
  height: 28px;
  padding: 0px;
`;

export const ImageBgContainer = styled(RadioGroup)`
  padding-right: 28px;
  display: flex;
  gap: 4px;
  margin-bottom: 40px;
  width: 100%;
`;

export const DialogActionsStyled = styled(DialogActions)`
  align-items: center;
  justify-content: center;
  padding: 0px;
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

export const Image = styled.img`
  width: 28px;
  height: 28px;
`;

export const DescriptionFieldStyled = styled.textarea`
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
  height: 154px;
  resize: none;
  width: 100%;
  margin-bottom: 24px;
  padding-left: 18px;
  outline: none;
  ::placeholder {
    color: ${props => {
      return props?.theme?.themeSet?.inputPlaceholder;
    }};
  }

  &:hover {
    border: 1px solid
      ${props => {
        return props?.theme?.themeSet?.inputOtherHover;
      }};
  }
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

  &:hover {
    border: 1px solid
      ${props => {
        return props?.theme?.themeSet?.inputOtherHover;
      }};
  }
`;

export const StyledButton = styled(Button)`
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${props => {
      return props?.theme?.themeSet?.modalHelpSendHover;
    }};
  }
`;

export const PlusIcon = styled(RiAddLine)`
  width: 18px;
  height: 18px;
  fill: ${props => {
    return props?.theme?.themeSet?.iconFill;
  }};
`;

export const CalendarWrap = styled.div`
  margin-bottom: 40px;
  & div {
    color: ${props => {
    return props?.theme?.themeSet?.calendar;
  }};
  & DatePicker {
  color: ${props => {
    return props?.theme?.themeSet?.calendar;
  }}
`;

// export const DateField = styled.input`

// `
