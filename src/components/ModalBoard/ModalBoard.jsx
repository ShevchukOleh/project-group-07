import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import {FormContainerStyled, ContainerModal, TextFieldStyled, DialogActionsStyled, ButtonStyled, Icon} from './ModalBoard.styled'
import { createTheme } from '@mui/material/styles';
import Colors from '../../images/icons/colors.svg';
import Container from '../../images/icons/container.svg';
import Hexagon from '../../images/icons/hexagon-01.svg';
import Lightning from '../../images/icons/lightning-02.svg';
import Loading from '../../images/icons/loading-03.svg';
import Project from '../../images/icons/Project.svg';
import Puzzle from '../../images/icons/puzzle-piece-02.svg';
import Star from '../../images/icons/star-04.svg';
import Plus from '../../images/icons/plus.svg'
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
 import GlobalStyles from '@mui/material/GlobalStyles';
import { Box } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup'





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
        <ContainerModal>
          <GlobalStyles styles={{ h2: {color: '#161616'},
          }} />
        <DialogTitle sx={{ fontSize: 18, fontWeight:500, padding: 0, marginBottom: '24px' }}>New board</DialogTitle>
        <DialogContent sx={{ padding: 0 }}>
          <TextFieldStyled
            autoFocus
            id="title"
            label="Title"
            type="text"
            placeholder='Title'
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              
            // sx={{
            //   border: '1px solid #BEDBB0',
            //   borderRadius: 1,
            //   caretColor: '#BEDBB0',
            //   height: 49,
            // }}
            // variant="standard"
          />
           {/* <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
          fullWidth
        /> */}
          <FormControl sx={{ padding: 0, marginBottom: '24px' }}>
          
            <DialogTitle
              sx={{ fontSize: 14, fontWeight:500, padding: 0, marginBottom: '14px' }}
            >Icons</DialogTitle>
            <FormContainerStyled
              row
              aria-labelledby="icons-group"
              defaultValue='Project'
              name="icons-group"
              value={value}
              onChange={handleChange}>
              
              <FormControlLabel value="Project" control={<Icon src={Project} alt='Project' />} /> 
              <FormControlLabel value="Star" control={<Icon src={Star} alt='Star' /> } /> 
              <FormControlLabel value="Loading" control={<Icon src={Loading} alt='Loading' />}/> 
              <FormControlLabel value="Puzzle" control={<Icon src={Puzzle} alt='Puzzle' />}/> 
              <FormControlLabel value="Container" control={<Icon src={Container} alt='Container' />} /> 
              <FormControlLabel value="Lightning" control={<Icon src={Lightning} alt='Lightning' />}/> 
              <FormControlLabel value="Colors" control={<Icon src={Colors} alt='Colors' />} /> 
              <FormControlLabel value="Hexagon" control={<Icon src={Hexagon} alt='Hexagon' />}/> 
            </FormContainerStyled>
          </FormControl>
          <DialogTitle sx={{ fontSize: 14, fontWeight:500, padding: 0, marginBottom: '14px' }}>Background</DialogTitle>
          <RadioGroup sx={{marginBottom: '40px'}}
              row
              aria-labelledby="icons-group"
              defaultValue='Project'
              name="icons-group"
              value={value}
              onChange={handleChange}>
              
              <FormControlLabel value="Project" control={<Icon src={Project} alt='Project' />} /> 
              {/* <FormControlLabel value="Star" control={<Icon src={Star} alt='Star' /> } /> 
              <FormControlLabel value="Loading" control={<Icon src={Loading} alt='Loading' />}/> 
              <FormControlLabel value="Puzzle" control={<Icon src={Puzzle} alt='Puzzle' />}/> 
              <FormControlLabel value="Container" control={<Icon src={Container} alt='Container' />} /> 
              <FormControlLabel value="Lightning" control={<Icon src={Lightning} alt='Lightning' />}/> 
              <FormControlLabel value="Colors" control={<Icon src={Colors} alt='Colors' />} /> 
              <FormControlLabel value="Hexagon" control={<Icon src={Hexagon} alt='Hexagon' />}/>  */}
            </RadioGroup>
          
          </DialogContent>
        <DialogActionsStyled>
          <Button variant="contained" onClick={handleClose}
            sx={{
              fontFamily: 'Poppins',
              backgroundColor: '#BEDBB0',
              color: '#161616',
              fontWeight: 500,   
              height: 49,
              width: '100%',
              padding: 0,
                  }}
          >
            <Box sx={{
              backgroundColor: '#161616',
              height: 28,
              width: 28,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 1,
              marginRight: 1,
       
            }}>
              <Icon src={Plus }/>
            </Box>
            Create</Button>
          </DialogActionsStyled>
        </ContainerModal>
      </Dialog>
    </div>
  );
}

