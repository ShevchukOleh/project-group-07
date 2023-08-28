import styled from 'styled-components';
import Button from '@mui/material/Button';
import MenuList from '@mui/material/MenuList';
import DialogActions from '@mui/material/DialogActions';



  
export const ButtonStyled = styled(Button)`
       background-color: "#BEDBB0";
       align-items: center;
       justify-content: center;
  `

  export const ContainerStyled = styled(MenuList)`
  display: flex;
  padding: 5;
  background-color: background.paper;
  border: 2px solid grey;
  border-radius: 5;
  `

  export const DialogActionsStyled = styled(DialogActions)`
    display: flex;
    flex-direction: column;
    padding: 5;
    align-items: center;
    justify-content: center;
`

export const Icon = styled.img`
width: 18;
height: 18;
`