import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {FormContainerStyled,RadioStyled, ImageBgContainer, Image, ContainerModal, TextFieldStyled, DialogActionsStyled, ButtonStyled, Icon} from './ModalBoard.styled'
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
import Radio from '@mui/material/Radio';
import { useState } from 'react';




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
  const [open, setOpen] = useState(false);
  const [valueIcon, setValueIcon] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [valueImgBg, setValueImgBg] = useState('');
  // const [title, setTitle] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseBtn = () => {
    setOpen(false);
    console.log(createBoard)
  }
   
  const handleChange = (event) => {
    setValueInput(event.target.value);
}
  
  const handleChangeIcon = (event) => {
    setValueIcon(event.target.value)
    console.log(event.target.value)
  };

  const handleChangeImg = (event) => {
    console.log(event.target.value)
    setValueImgBg(event.target.value)
  }

  const createBoard = {
    name: valueInput,
    icon: valueIcon,
    img: valueImgBg,
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
              value={valueIcon}
              onChange={handleChangeIcon}>
              
                <FormControlLabel value="Project"
                  control={<RadioStyled
                    icon={<Icon src={Project} alt='Project' />}
                    checkedIcon={<Icon src={Project} alt='Project' checked />}
                  />}/>                      
                <FormControlLabel value="Star"
                  control={<RadioStyled
                  icon={<Icon src={Star} alt='Star' />}
                  checkedIcon={<Icon src={Star} alt='Star' checked/> }
                  />} />                
                <FormControlLabel value="Loading"
                  control={<RadioStyled
                    icon={<Icon src={Loading} alt='Loading' />}
                    checkedIcon={<Icon src={Loading} alt='Loading' checked />}
                  />} /> 
                <FormControlLabel value="Puzzle"
                  control={
                    <RadioStyled
                    icon={<Icon src={Puzzle} alt='Puzzle' />}
                    checkedIcon={<Icon src={Puzzle} alt='Puzzle' checked />}
                  />}/>
                <FormControlLabel value="Container"
                  control={
                    <RadioStyled
                    icon={<Icon src={Container} alt='Container' />}
                    checkedIcon={<Icon src={Container} alt='Container' checked />}
                  />}/> 
                <FormControlLabel value="Lightning"
                  control={<RadioStyled
                    icon={<Icon src={Lightning} alt='Lightning' />}
                    checkedIcon={<Icon src={Lightning} alt='Lightning'checked />}/>
                    } /> 
                <FormControlLabel value="Colors"
                  control={
                    <RadioStyled
                      icon={<Icon src={Colors} alt='Colors' />}
                      checkedIcon={<Icon src={Colors} alt='Colors' checked />} />}
                   /> 
                <FormControlLabel value="Hexagon"
                  control={
                    <RadioStyled
                      icon={<Icon src={Hexagon} alt='Hexagon' />}
                      checkedIcon={<Icon src={Hexagon} alt='Hexagon' checked />} />}
                   />
            </FormContainerStyled>
          </FormControl>
          <DialogTitle sx={{ fontSize: 14, fontWeight:500, padding: 0, marginBottom: '14px' }}>Background</DialogTitle>
          <ImageBgContainer
              row
              aria-labelledby="image-group"
              defaultValue='Vector1'
              name="image-group"
              value={valueImgBg}
              onChange={handleChangeImg}>
              
              <FormControlLabel value="Vector1"
                control={
                   <Radio
                      icon={<Image src={Vector1} alt='Vector1' />}
                      checkedIcon={<Image src={Vector1} alt='Vector1' checked />} />}
                   />

              <FormControlLabel value="Vector2"
               control={
                   <Radio
                      icon={<Image src={Vector2} alt='Vector2' />}
                      checkedIcon={<Image src={Vector2} alt='Vector2' checked />} />}
                   />
              <FormControlLabel value="Vector3" control={<Image src={Vector3} alt='Vector3' />} />
              <FormControlLabel value="Vector4" control={<Image src={Vector4} alt='Vector4' />} />
            </ImageBgContainer>
          
          </DialogContent>
        <DialogActionsStyled>
            <Button variant="contained"
            onClick={handleCloseBtn}
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

