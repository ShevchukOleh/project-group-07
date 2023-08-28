import styled from 'styled-components';
import Button from '@mui/material/Button';
import MenuList from '@mui/material/MenuList';
import RadioGroup from '@mui/material/RadioGroup'
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import { Dialog } from '@mui/material';


  
// export const DialogStyled = styled(Dialog)`
// padding: 24px;
// `

export const ButtonStyled = styled(Button)`
       background-color: "#BEDBB0";
       align-items: center;
       justify-content: center;
  `

export const ContainerModal = styled.div`
padding: 24px;

`

  export const FormContainerStyled = styled(RadioGroup)`
  border: 2px solid grey;
  padding: 0px;

  `

  export const DialogActionsStyled = styled(DialogActions)`
    align-items: center;
    justify-content: center;
`

export const Icon = styled.img`
width: 18px;
height: 18px;
`

export const TextFieldStyled = styled.input`
caret-color: #BEDBB0;
border: 1px solid #BEDBB0;
outline: none;
border-radius: 8px;
height: 49px;
width: 100%;
`