import styled from 'styled-components';
import Button from '@mui/material/Button';
import MenuList from '@mui/material/MenuList';
import DialogActions from '@mui/material/DialogActions';



  
export const ButtonStyled = styled(Button)`
       background-color: "#BEDBB0",
       align-items: center,
       justify-content: center,
  `

  export const ContainerStyled = styled(MenuList)`
  display: 'flex',
  padding: 5,
  bgcolor: 'background.paper',
  border: '2px solid grey',
  borderRadius: 5,
  `

  export const DialogActionsStyled = styled(DialogActions)`
    display: 'flex',
    flexDirection: 'column',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
`