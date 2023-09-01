import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Loader from 'components/Loader/Loader'
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {
  IconContainer,
  RadioStyled,
  RadioStyledImg,
  ImageBgContainer,
  Image,
  ContainerModal,
  TextFieldStyled,
  DialogActionsStyled,
  Icon,
  FormControlLabelStyled,
} from './ModalBoard.styled';
import Plus from '../../images/icons/plus.svg';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import {getIcon, getImage} from '../../components/ModalBoard/servises'
import { useDispatch, useSelector } from 'react-redux';
import { createBoard } from '../../store/AsyncThunk/asyncThunkBoards';
import { selectToken } from 'store/createSlices/userAuth/userSelectors';


export default function FormDialog({hideModal, isShowModal}) {
  const dispatch = useDispatch();
  
  const [valueInput, setValueInput] = useState('');
  const [valueIcon, setValueIcon] = useState('');
  const [valueImgBg, setValueImgBg] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [icon, setIcon] = useState([]);
  const [image, setImage] = useState([]);

  // const theme = useSelector(sele)
// const isLoading = useSelector(selectLoading)
 
  const token = useSelector(selectToken)
  
  useEffect(() => {
    setIsLoading(true);
    getIcon(token).then(data => {
      setIcon(data);
    })
      .catch((error) => setError(error))
      .finally(() => {
        setIsLoading(false)
      })
  }, [token]);


  useEffect(() => {
    setIsLoading(true);
    setImage([]);
    getImage(token).then(data => {
      setImage(data);
    })
      .catch((error) => setError(error.message))
      .finally(() => {
        setIsLoading(false)
      })
  }, [token]);

  
    const createBd = {
    title: valueInput,
    icon: valueIcon,
    background: valueImgBg,
  };

  const length = image.length - 3;
  const imageNew = image.slice(0, length);
  const lightImageBg = image[15];
  // const darkImageBg = image[16];
  // const violetImageBg = image[17];
  // console.log(lightImageBg, darkImageBg, violetImageBg)

  
  const handleClose = () => {
    hideModal();
  };

  const handleCloseBtn = () => {
    hideModal();
    if (valueInput && valueImgBg) {
      dispatch(createBoard(createBd));
      // console.log(createBd);
    }
    else console.error('Please, fill in the required fields');
  }
   
  const handleChange = event => {
    setValueInput(event.target.value);
    // console.log(valueInput);
  };

  const handleChangeIcon = event => {
    setValueIcon(event.target.value);
    // console.log(valueIcon)
  };

  const handleChangeImg = event => {
    setValueImgBg(event.target.value);
    // console.log(valueImgBg)
  };

  return (
   
    <div>
    <Dialog open={isShowModal} onClose={handleClose}>
    <ContainerModal>
      {isLoading && <Loader/>}
      {error && <div>Something went wrong. Try again later</div>}
        <DialogTitle
          sx={{
            fontSize: 18,
            fontWeight: 500,
            padding: 0,
            marginBottom: '24px',
          }}
        >
          New board
        </DialogTitle>
        <DialogContent sx={{ padding: 0 }}>
          <TextFieldStyled
            autoFocus
            id="title"
            label="Title"
            type="text"
            placeholder="Title"
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
              sx={{
                fontSize: 14,
                fontWeight: 500,
                padding: 0,
                marginBottom: '14px',
              }}
            >
              Icons
            </DialogTitle>
              <IconContainer
              row
              aria-labelledby="icons-group"
              // defaultValue="Project"
              name="icons-group"
              value={valueIcon}
              onChange={handleChangeIcon}
            >
                
              {icon &&
                icon.map(({ _id, icon_src }) => (
                  <FormControlLabelStyled
                    value={_id}
                    key={_id}
                    control={
                      <RadioStyled key={_id}
                        icon={<Icon src={icon_src} alt={_id} />}
                        checkedIcon={
                        <Icon src={icon_src} alt={_id} checked />
                        }
                      />
                    }
                  />
                ))}
            </IconContainer>
          </FormControl>

          <DialogTitle
            sx={{
              fontSize: 14,
              fontWeight: 500,
              padding: 0,
              marginBottom: '14px',
            }}
          >
            Background
          </DialogTitle>

          <ImageBgContainer
            row
            aria-labelledby="image-group"
            defaultValue="Vector1"
            name="image-group"
            value={valueImgBg}
            onChange={handleChangeImg}
            >
             {lightImageBg && (<FormControlLabelStyled
                value={'noBackground'}
                control={
                  <RadioStyledImg
                    key={lightImageBg._id}
                    icon={<Image src={lightImageBg.background_icon_src} alt='noBackground' />}
                    checkedIcon={
                    <Image src={lightImageBg.background_icon_src} alt='noBackground' checked />
                    }
                  />
                }
              />)
              }
              
            {image && imageNew.map(({ _id, background_icon_src }) => (
              <FormControlLabelStyled
                value={_id}
                key={_id}
                control={
                  <RadioStyledImg
                    icon={<Image src={background_icon_src} alt={_id} />}
                    checkedIcon={
                    <Image src={background_icon_src} alt={_id} checked />
                    }
                  />
                }
              />
            ))
            }
          </ImageBgContainer>
        </DialogContent>
        <DialogActionsStyled>
          <Button
            onClick={handleCloseBtn}
            sx={{
              fontFamily: 'Poppins',
              backgroundColor: '#BEDBB0',
              color: '#161616',
              fontWeight: 500,
              height: 49,
              width: '100%',
              padding: 0,
              textTransform: 'capitalize',
            }}
          >
            <Box
              sx={{
                backgroundColor: '#161616',
                height: 28,
                width: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 1,
                marginRight: 1,
              }}
            >
              <Icon src={Plus} />
            </Box>
            Create
          </Button>
        </DialogActionsStyled>
      </ContainerModal>
    </Dialog>
  </div>

  );
}