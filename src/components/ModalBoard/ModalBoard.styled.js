import styled from 'styled-components';
import Button from '@mui/material/Button';
import MenuList from '@mui/material/MenuList';
import RadioGroup from '@mui/material/RadioGroup'
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';


  
export const ButtonStyled = styled(Button)`
       background-color: "#BEDBB0";
       align-items: center;
       justify-content: center;
  `

  export const FormContainerStyled = styled(RadioGroup)`
  display: block;
  margin: 25;
  background-color: background.paper;
  border: 2px solid grey;
  border-radius: 5;
  `

  export const DialogActionsStyled = styled(DialogActions)`
    align-items: center;
    justify-content: center;
`

export const Icon = styled.img`
width: 18px;
height: 18px;
`

export const TextFieldStyled = styled(TextField)`
border-color: red;
`