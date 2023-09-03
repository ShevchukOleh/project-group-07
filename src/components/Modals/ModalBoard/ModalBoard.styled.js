import styled from 'styled-components';
import Button from '@mui/material/Button';
import RadioGroup from '@mui/material/RadioGroup';
import DialogActions from '@mui/material/DialogActions';
import { Radio, FormControlLabel } from '@mui/material';

export const ButtonStyled = styled(Button)`
  font-family: 'Poppins';
  background-color: '#BEDBB0';
  color: '#161616';
  font-weight: 500;
  height: 49px;
  width: '100%';
  padding: 0;
  position: relative;
  text-transform: 'capitalize';
  &&:hover {
    background-color: '#9DC888';
  }
`;
export const ContainerModal = styled.div`
  padding: 24px;
  width: 335px;
  height: auto;
  @media screen and (max-width: 375px) {
    max-width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

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

export const TextFieldStyled = styled.input`
  caret-color: #bedbb0;
  border: 1px solid #bedbb0;
  border-radius: 8px;
  height: 49px;
  width: 100%;
  margin-bottom: 24px;
  padding-left: 18px;
  ::placeholder {
    color: #bedbb0;
  }
  // &&:focus {
  // border: 1px solid grey
  // };
  &&:hover {
    border: 1px solid grey;
  }
`;
export const IconCrossWrapper = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;
`;
