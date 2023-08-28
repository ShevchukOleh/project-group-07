import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import {ContainerStyled, DialogActionsStyled, ButtonStyled, Icon} from './ModalBoard.styled'
import { createTheme } from '@mui/material/styles';
import Colors from '../../images/icons/colors.svg';
import Container from '../../images/icons/container.svg';
import Hexagon from '../../images/icons/hexagon-01.svg';
import Lightning from '../../images/icons/lightning-02.svg';
import Loading from '../../images/icons/loading-03.svg';
import Project from '../../images/icons/Project.svg';
import Puzzle from '../../images/icons/puzzle-piece-02.svg';
import Star from '../../images/icons/star-04.svg';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



// const theme = createTheme({
//   palette: {
//     green: {
//       main: '#E3D026',
//       light: '#E9DB5D',
//       dark: '#A29415',
//       contrastText: '#242105',
//     },
//   },
// });

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  // const [title, setTitle] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (value) => {
    setValue(value);
    console.log(value)
  }


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New board</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            // variant="standard"
          />
          <FormControl>
          <FormLabel id="icons-group">Icons</FormLabel>
          <ContainerStyled
              aria-labelledby="icons-group"
              defaultValue='Project'
              name="icons-group"
              value={value}
              onChange={handleChange}>
              
              <FormControlLabel value="Project" control={<Icon src={Project} alt='Project' />} /> 
              <FormControlLabel value="Star" control={<Icon src={Star} alt='Star' />} /> 
              <FormControlLabel value="Loading" control={<Icon src={Loading} alt='Loading' />} /> 
              <FormControlLabel value="Puzzle" control={<Icon src={Puzzle} alt='Puzzle' />} /> 
              <FormControlLabel value="Container" control={<Icon src={Container} alt='Container' />} /> 
              <FormControlLabel value="Lightning" control={<Icon src={Lightning} alt='Lightning' />} /> 
              <FormControlLabel value="Colors" control={<Icon src={Colors} alt='Colors' />} /> 
              <FormControlLabel value="Hexagon" control={<Icon src={Hexagon} alt='Hexagon' />} /> 
            </ContainerStyled>
          </FormControl>
          <DialogTitle sx={2}>Background</DialogTitle>
          </DialogContent>
        <DialogActionsStyled>
          <ButtonStyled margin="dense" variant="contained" onClick={handleClose}>Create</ButtonStyled>
        </DialogActionsStyled>
      </Dialog>
    </div>
  );
}

