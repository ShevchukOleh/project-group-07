import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
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
} from './ModalBoard.styled';
import Plus from '../../images/icons/plus.svg';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import {getIcon, getImage} from '../../components/ModalBoard/servises'
import { useDispatch, useSelector } from 'react-redux';
import { createBoard } from '../../store/AsyncThunk/asyncThunkBoards';
import { selectToken } from 'store/createSlices/userAuth/userSelectors';

// const TOKEN= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWRkMTIzZWFiZjkxMjVmMzI0ODNhMyIsImlhdCI6MTY5MzMyMTMzNSwiZXhwIjoxNjkzNDA0MTM1fQ.fA9XbH9XNFx6_S8_QSkmGifM67V63jMkgqxdr-3jvLU'

export default function FormDialog({hideModal, isShowModal}) {

  const dispatch = useDispatch();
  // const navigate = useNavigate();


  const [valueInput, setValueInput] = useState('');
  const [valueIcon, setValueIcon] = useState('');
  const [valueImgBg, setValueImgBg] = useState('');
  //  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [icon, setIcon] = useState([]);
  const [image, setImage] = useState([]);

const token = useSelector(selectToken);

  useEffect(() => {
    getIcon(token).then(data => {
      setIcon(data);
      console.log(data)
    })
    .catch((error) => setError(error))
  }, [token])

    useEffect(() => {
    getImage(token).then(data => {
      setImage(data);
      console.log(data)
    })
    .catch((error) => setError(error))
    }, [token])
  
  const handleClose = () => {
    hideModal();
  };

  const handleCloseBtn = () => {
    hideModal();
    if (valueInput && valueImgBg) {
    dispatch(createBoard(createBoard));
    console.log(createBoard)
    }
    else console.error('Please, fill in the required fields');
  }
   
  const handleChange = (event) => {
    setValueInput(event.target.value);
}
  
  const handleChangeIcon = (event) => {
    setValueIcon(event.target.value)
    console.log(event.target.value)
  };

  const handleChange = event => {
    setValueInput(event.target.value);
  };

  const handleChangeIcon = event => {
    setValueIcon(event.target.value);
  };

  const handleChangeImg = event => {
    setValueImgBg(event.target.value);
  };

  const createBoard = {
    name: valueInput,
    icon: valueIcon,
    img: valueImgBg,
  };

  return (
    <div>
      <Dialog open={isShowModal} onClose={handleClose}>
        <ContainerModal>
          {/* <GlobalStyles styles={{ h2: {color: '#161616'}}} /> */}
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
                defaultValue="Project"
                name="icons-group"
                value={valueIcon}
                onChange={handleChangeIcon}
              >
                {error && <div>Something went wrong. Try again later</div>}
                {icon &&
                  icon.map(({ _id, icon_src }) => (
                    <FormControlLabel
                      value={_id}
                      control={
                        <RadioStyled
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
              {image &&
                image.map(({ _id, background_icon_src }) => (
                  <FormControlLabel
                    value={_id}
                    control={
                      <RadioStyledImg
                        icon={<Image src={background_icon_src} alt={_id} />}
                        checkedIcon={
                          <Image src={background_icon_src} alt={_id} checked />
                        }
                      />
                    }
                  />
                ))}
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
