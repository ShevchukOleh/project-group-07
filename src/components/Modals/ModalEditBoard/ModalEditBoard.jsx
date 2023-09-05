import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Loader from 'components/Loader/Loader';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Plus from '../../../images/icons/plus.svg';
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
  ErrorTextWrap,
  StyledButton,
  StyledBox,
} from './ModalEditBoard.styled';
import FormControl from '@mui/material/FormControl';
import { getTheme } from 'constants';
import { getCurrentUser } from 'store/createSlices/userAuth/userSelectors';
import { useState } from 'react';
import { useEffect } from 'react';

import { getIcon, getImage } from '../ModalBoard/servises';

import { useSelector } from 'react-redux';
// import { editBoardById } from '../../../store/AsyncThunk/asyncThunkBoards';
import { selectToken } from 'store/createSlices/userAuth/userSelectors';
import { IconClose } from '../UI/ModalCulumn.styled';
import { CloseBtn } from '../NeedHelp/NeedHelpModal.styled';

export default function ModalEditFormDialog({ board, closeEditModal, isOpenEditModal }) {
  const user = useSelector(getCurrentUser);
  const currentTheme = user?.theme;
  const theme = getTheme(currentTheme);

  // const dispatch = useDispatch();

  const [valueInput, setValueInput] = useState('');
  const [valueIcon, setValueIcon] = useState('');
  const [valueImgBg, setValueImgBg] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [icon, setIcon] = useState([]);
  const [image, setImage] = useState([]);
  const [errorField, setErrorField] = useState(null);

  // const theme = useSelector(sele)
  // const isLoading = useSelector(selectLoading)

  const token = useSelector(selectToken);

  useEffect(() => {
    setIsLoading(true);
    getIcon(token)
      .then(data => {
        setIcon(data);
      })
      .catch(error => setError(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [token]);

  useEffect(() => {
    setIsLoading(true);
    setImage([]);
    getImage(token)
      .then(data => {
        setImage(data);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [token]);

  const editBoard = {
    title: valueInput,
    icon: valueIcon,
    background: valueImgBg,
  };
  const length = image.length - 3;
  const imageNew = image.slice(0, length);
  const lightImageBg = image[15];
  // const darkImageBg = image[16];
  // const violetImageBg = image[17];

  // console.log(icon);
  // console.log(image);

  const handleCloseBtn = () => {
    if (valueInput) {
      console.log(editBoard)
      // dispatch(editBoardById(valueInput, board ));
      console.log(valueInput, valueIcon, valueImgBg)
      setErrorField('');
      // setValueInput('');
      setValueIcon('');
      setValueImgBg('');
      closeEditModal(false);
      //       createOpenModalShow(prev => !prev);
    } else {
      setErrorField('Please, fill in the required fields');
    }
  };
  const handleChange = event => {
    setValueInput(event.target.value);
   console.log(event.target.value)

  };

  const handleChangeIcon = event => {
    // setValueIcon(event.target.value);
    console.log(event.target.value)

  };

  const handleChangeImg = event => {
    setValueImgBg(event.target.value);
    console.log(event.target.value)

  };

  return (
    <div>
      <Dialog open={isOpenEditModal} onClose={closeEditModal}>
        <ContainerModal>
          {isLoading && <Loader />}
          {error && (
            <ErrorTextWrap>Something went wrong. Try again later</ErrorTextWrap>
          )}

          <DialogTitle
            sx={{
              fontSize: 18,
              fontWeight: 500,
              padding: 0,
              marginBottom: '24px',
              color: `${theme?.themeSet?.modalHelpTitle}`,
            }}
          >
            Edit board
          </DialogTitle>

          <DialogContent sx={{ padding: 0 }}>
            <TextFieldStyled
              autoFocus
              id="title"
              label="Project office"
              type="text"
              placeholder="Title"
              required
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
            {errorField && (
              <div style={{ color: 'red', position: 'absolute', top: 130 }}>
                Please, fill in the required fields
              </div>
            )}
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
                  color: `${theme?.themeSet?.modalHelpTitle}`,
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
                        <RadioStyled
                          key={_id}
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
                color: `${theme?.themeSet?.modalHelpTitle}`,
              }}
            >
              Background
            </DialogTitle>

            <ImageBgContainer
              row
              aria-labelledby="image-group"
              defaultValue="noBackground"
              name="image-group"
              value={valueImgBg}
              onChange={handleChangeImg}
            >
              {lightImageBg && (
                <FormControlLabelStyled
                  value={'noBackground'}
                  control={
                    <RadioStyledImg
                      key={lightImageBg._id}
                      icon={
                        <Image
                          src={lightImageBg.background_icon_src}
                          alt="noBackground"
                        />
                      }
                      checkedIcon={
                        <Image
                          src={lightImageBg.background_icon_src}
                          alt="noBackground"
                          checked
                        />
                      }
                    />
                  }
                />
              )}

              {image &&
                imageNew.map(({ _id, background_icon_src }) => (
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
                ))}
            </ImageBgContainer>
          </DialogContent>

          <DialogActionsStyled>
            <StyledButton
              onClick={handleCloseBtn}
              sx={{
                fontFamily: 'Poppins',
                backgroundColor: `${theme?.themeSet?.modalHelpSendBg}`,
                color: `${theme?.themeSet?.modalHelpSendText}`,
                fontWeight: 500,
                height: 49,
                width: '100%',
                padding: 0,
                textTransform: 'capitalize',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: `${theme?.themeSet?.modalHelpSendBorder}`,
                borderRadius: '8px',
              }}
            >
              <StyledBox
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
                <Icon src={Plus}/>
              </StyledBox>
              Edit Board
            </StyledButton>
          </DialogActionsStyled>
          <CloseBtn>
            <IconClose onClick={closeEditModal} />
          </CloseBtn>
        </ContainerModal>
      </Dialog>
    </div>
  );
}