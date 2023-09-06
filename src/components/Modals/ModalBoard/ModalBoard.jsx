import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Loader from 'components/Loader/Loader';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {
  RadioStyledImg,
  ImageBgContainer,
  Image,
  ContainerModal,
  TextFieldStyled,
  DialogActionsStyled,
  FormControlLabelStyled,
  ErrorTextWrap,
  StyledButton,
  StyledBox,
  PlusIcon,
  IconWrapper,
} from './ModalBoard.styled';
import FormControl from '@mui/material/FormControl';
import { getTheme } from 'constants';
import { getCurrentUser } from 'store/createSlices/userAuth/userSelectors';
import { useState } from 'react';
import { useEffect } from 'react';

import { getIcon, getImage } from './servises';

import { useDispatch, useSelector } from 'react-redux';
import { createBoard } from '../../../store/AsyncThunk/asyncThunkBoards';
import { selectToken } from 'store/createSlices/userAuth/userSelectors';
import { IconClose } from '../UI/ModalCulumn.styled';
import { CloseBtn } from '../NeedHelp/NeedHelpModal.styled';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

export default function FormDialog({ createOpenModalShow, isCreateOpenModal }) {
  const user = useSelector(getCurrentUser);
  const currentTheme = user?.theme || 'Light';
  const theme = getTheme(currentTheme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [valueInput, setValueInput] = useState('');
  const [valueIcon, setValueIcon] = useState('');
  const [valueImgBg, setValueImgBg] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [icon, setIcon] = useState([]);
  const [image, setImage] = useState([]);
  const [errorField, setErrorField] = useState(null);



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
    // setImage([]);
    getImage(token)
      .then(data => {
        setImage(data);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [token]);

  // console.log(icon);

  const createBd = {
    title: valueInput,
    icon: valueIcon,
    background: valueImgBg,
  };
  const length = image.length - 3;
  const imageNew = image.slice(0, length);
  const lightImageBg = image[15];
  const darkImageBg = image[16];
  const violetImageBg = image[17];

  console.log(image)
  
  const handleCloseBtn = () => {
    if (valueInput) {
      dispatch(createBoard(createBd));
      setErrorField('');
      setValueInput('');
      createOpenModalShow();
      navigate(`/home/${valueInput}`);
    } else {
      setErrorField('Please, fill in the required fields');
    }
  };
  const handleChange = event => {
    setValueInput(event.target.value);
    console.log(event.target.value);
  };

  const handleChangeIcon = event => {
    const clickedId = event.currentTarget.getAttribute('data-icon-id');
    setValueIcon(clickedId);
    console.log(clickedId);
  };

  const handleChangeImg = event => {
    setValueImgBg(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <Dialog open={isCreateOpenModal} onClose={createOpenModalShow}>
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
              <IconWrapper>
                {icon.map(({ _id, icon_src }) => (
                  <span
                    key={_id}
                    id={_id}
                    onClick={handleChangeIcon}
                    data-icon-id={_id}
                  >
                    <ReactSVG src={icon_src} />
                  </span>
                ))}
              </IconWrapper>
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
              { currentTheme ==='Light' && (
                <FormControlLabelStyled
                  value={'noBackground'}
                  control={
                    <RadioStyledImg
                      key={lightImageBg?._id}
                      icon={
                        <Image
                          src={lightImageBg?.background_icon_src}
                          alt="noBackground"
                        />
                      }
                      checkedIcon={
                        <Image
                          src={lightImageBg?.background_icon_src}
                          alt="noBackground"
                          checked
                        />
                      }
                    />
                  }
                />
  )
              }
              { currentTheme ==='Dark' && (
                <FormControlLabelStyled
                  value={'noBackground'}
                  control={
                    <RadioStyledImg
                      key={darkImageBg?._id}
                      icon={
                        <Image
                          src={darkImageBg?.background_icon_src}
                          alt="noBackground"
                        />
                      }
                      checkedIcon={
                        <Image
                          src={darkImageBg?.background_icon_src}
                          alt="noBackground"
                          checked
                        />
                      }
                    />
                  }
                />
  )
              }
              { currentTheme ==='Violet' && (
                <FormControlLabelStyled
                  value={'noBackground'}
                  control={
                    <RadioStyledImg
                      key={violetImageBg?._id}
                      icon={
                        <Image
                          src={violetImageBg?.background_icon_src}
                          alt="noBackground"
                        />
                      }
                      checkedIcon={
                        <Image
                          src={violetImageBg?.background_icon_src}
                          alt="noBackground"
                          checked
                        />
                      }
                    />
                  }
                />
  )
              }


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
                borderRadius: '8px',
              }}
            >
              <StyledBox
                sx={{
                  height: 28,
                  width: 28,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 1,
                  marginRight: 1,
                }}
              >
                <PlusIcon />
              </StyledBox>
              Create
            </StyledButton>
          </DialogActionsStyled>

          <CloseBtn>
            <IconClose onClick={createOpenModalShow} />
          </CloseBtn>
        </ContainerModal>
      </Dialog>
    </div>
  );
}
