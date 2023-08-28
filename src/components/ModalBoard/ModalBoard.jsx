import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {FormContainerStyled, ImageBgContainer, Image, ContainerModal, TextFieldStyled, DialogActionsStyled, ButtonStyled, Icon} from './ModalBoard.styled'
import Colors from '../../images/icons/colors.svg';
import Container from '../../images/icons/container.svg';
import Hexagon from '../../images/icons/hexagon-01.svg';
import Lightning from '../../images/icons/lightning-02.svg';
import Loading from '../../images/icons/loading-03.svg';
import Project from '../../images/icons/Project.svg';
import Puzzle from '../../images/icons/puzzle-piece-02.svg';
import Star from '../../images/icons/star-04.svg';
import Plus from '../../images/icons/plus.svg';
import Vector1 from '../../images/images_bg/Vector1.svg'
import Vector2 from '../../images/images_bg/Vector2.svg'
import Vector3 from '../../images/images_bg/Vector3.svg'
import Vector4 from '../../images/images_bg/Vector4.svg'
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
 import GlobalStyles from '@mui/material/GlobalStyles';
import { Box } from '@mui/material';
// import RadioGroup from '@mui/material/RadioGroup'


// const IMG_URL = `../../images/images_bg/`

// const imageArraySrc = [
//   `images-05.svg`,
//   `Vector1.svg`
// ]


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
  const [valueInput, setValueInput] = React.useState('');
  // const [title, setTitle] = React.useState('');

  const handleChange = (value) => {
  console.log(value)
}

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeIcon = (value) => {
    setValueInput(value);
    console.log(value)
  }
  const handleChangeImg = (value) => {
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
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
              onChange={handleChangeIcon}>
              
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
          <ImageBgContainer
              row
              aria-labelledby="image-group"
              defaultValue='Vector1'
              name="image-group"
              value={value}
              onChange={handleChangeImg}>
              
              <FormControlLabel value="Vector1" control={<Image src={Vector1} alt='Vector1' />} />
              <FormControlLabel value="Vector2" control={<Image src={Vector2} alt='Vector2' />} />
              <FormControlLabel value="Vector3" control={<Image src={Vector3} alt='Vector3' />} />
              <FormControlLabel value="Vector4" control={<Image src={Vector4} alt='Vector4' />} />
            </ImageBgContainer>
          
          </DialogContent>
        <DialogActionsStyled>
            <Button variant="contained"
              onClick={handleClose}
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

