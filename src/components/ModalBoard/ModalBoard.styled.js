import styled from 'styled-components';
import Button from '@mui/material/Button';
import RadioGroup from '@mui/material/RadioGroup'
import DialogActions from '@mui/material/DialogActions';
import { Radio } from '@mui/material';


export const ButtonStyled = styled(Button)`
       background-color: "#BEDBB0";
       align-items: center;
       justify-content: center;
       &:hover {
      background-color: grey
  };
  `

export const ContainerModal = styled.div`
padding: 24px;
width: 335px;
height: 433;
`

  export const FormContainerStyled = styled(RadioGroup)`
  border: 2px solid grey;
  padding-left: 9px;
  display:flex;
  gap: 8px;
  
`
export const RadioStyled = styled(Radio)`
width: 18px;
height: 18px;
`
export const RadioStyledImg = styled(Radio)`
width: 18px;
height: 18px;
`
  
export const ImageBgContainer = styled(RadioGroup)`
  border: 2px solid grey;
  padding-left: 14px;
  display: flex;
  gap: 4px;
  margin-bottom: 40px;
`
  export const DialogActionsStyled = styled(DialogActions)`
   align-items: center;
    justify-content: center;
    padding: 0px;
`

export const Icon = styled.img`
width: 18px;
height: 18px;
`

export const Image = styled.img`
width: 28px;
height: 28px;
`

export const TextFieldStyled = styled.input`
caret-color: #BEDBB0;
border: 1px solid #BEDBB0;
border-radius: 8px;
height: 49px;
width: 100%;
margin-bottom: 24px;
padding-left: 18px;
  ::placeholder {
    color: #BEDBB0;
  };
  // &&:focus {
  // border: 1px solid grey
  // };
  &&:hover {
  border: 1px solid grey
  };
`
