import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Loader from 'components/Loader/Loader';
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
  ErrorTextWrap,
  StyledButton,
  StyledBox,
} from './ModalBoard.styled';
import FormControl from '@mui/material/FormControl';
import { theme } from '../../../constants';
import { useState } from 'react';
import { useEffect } from 'react';

import { getIcon, getImage } from './servises';

import { useDispatch, useSelector } from 'react-redux';
import { createBoard } from '../../../store/AsyncThunk/asyncThunkBoards';
import { selectToken } from 'store/createSlices/userAuth/userSelectors';

export default function FormDialog({ createOpenModalShow, isCreateOpenModal }) {
  const dispatch = useDispatch();

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

  const handleCloseBtn = () => {
    if (valueInput && valueImgBg) {
      dispatch(createBoard(createBd));
      setErrorField('');
      setValueInput('');
      createOpenModalShow();
//       createOpenModalShow(prev => !prev);
    } else {
      setErrorField('Please, fill in the required fields');
    }
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
              defaultValue="Vector1"
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
                <Icon />
              </StyledBox>
              Create
            </StyledButton>
          </DialogActionsStyled>
          {/* <IconCrossWrapper onClick={createOpenModalShow}>
            <AiOutlineClose size={18} color="#161616" />
          </IconCrossWrapper> */}

        </ContainerModal>
      </Dialog>
    </div>
  );
}
