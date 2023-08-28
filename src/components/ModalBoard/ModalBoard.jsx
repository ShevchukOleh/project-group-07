import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
// import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
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
  // const [title, setTitle] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



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
        <DialogTitle sx={2}>Icons</DialogTitle>
          {/* <MenuList sx={style}> */}
        <ContainerStyled>
        <MenuItem>
          <ListItemIcon>
            <Icon src={Project} alt='Colors' />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Icon src={Star} alt='Container' />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Icon src={Loading} alt='colors' />
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Icon src={Puzzle} alt='colors' />
          </ListItemIcon>
            </MenuItem>
            <MenuItem>
          <ListItemIcon>
            <Icon src={Container} alt='colors' />
          </ListItemIcon>
            </MenuItem>
            <MenuItem>
          <ListItemIcon>
            <Icon src={Lightning} alt='colors' />
          </ListItemIcon>
            </MenuItem>
            <MenuItem>
          <ListItemIcon>
            <Icon src={Colors} alt='colors' />
          </ListItemIcon>
            </MenuItem>
            <MenuItem>
          <ListItemIcon>
            <Icon src={Hexagon} alt='colors' />
          </ListItemIcon>
        </MenuItem>
          {/* </MenuList> */}
          </ContainerStyled>
          <DialogTitle sx={2}>Background</DialogTitle>
          </DialogContent>
        <DialogActionsStyled>
          <ButtonStyled margin="dense" variant="contained" onClick={handleClose}>Create</ButtonStyled>
        </DialogActionsStyled>
      </Dialog>
    </div>
  );
}

