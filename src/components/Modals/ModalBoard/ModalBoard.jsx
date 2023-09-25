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
  FormControlLabelStyled,
  ErrorTextWrap,
  IconWrapper,
  IconReactSvgWrapper,
} from './ModalBoard.styled';
import FormControl from '@mui/material/FormControl';
import { getTheme } from 'constants';
import { getCurrentUser } from 'store/createSlices/userAuth/userSelectors';
import { useState, useEffect } from 'react';
import { getIcon, getImage } from './servises';
import { useDispatch, useSelector } from 'react-redux';
import { createBoard } from '../../../store/AsyncThunk/asyncThunkBoards';
import { selectToken } from 'store/createSlices/userAuth/userSelectors';
import { CloseBtn } from 'components/Buttons/CloseBtn';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { ModalTitle } from '../ModalTitle';
import { BaseBtn } from 'components/Buttons/BaseBtn';

export default function FormDialog({ createOpenModalShow, isCreateOpenModal,
 }) {
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
  const [selectImgBg, setSelectImgBg] = useState(null);

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
  const darkImageBg = image[17];
  const violetImageBg = image[16];

  const handleCloseBtn = (e) => {
    e.preventDefault();

    if (valueInput) {
      dispatch(createBoard(createBd));
      navigate(`/home/${valueInput}`);
      setErrorField('');
      setValueInput('');
      createOpenModalShow();
    } else {
      setErrorField('Please, fill in the required fields');
    }
  };

    const handleTakeImgBg = _id => {
    setSelectImgBg(_id);
  };



  const handleChange = event => {
    setValueInput(event.target.value);
  };

  const handleChangeIcon = event => {
    const clickedId = event.currentTarget.getAttribute('data-icon-id');
    setValueIcon(clickedId);
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

          <ModalTitle title={'New board'} />

          <DialogContent sx={{ padding: 0 }}>
            <TextFieldStyled
              autoFocus
              id="title"
              label="Title"
              type="text"
              placeholder="Title"
              required
              onChange={handleChange}
            />
            {errorField && (
              <div style={{ color: 'red', position: 'absolute', top: 130 }}>
                Please, fill in the required fields
              </div>
            )}

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
                  <IconReactSvgWrapper
                    $currentTheme={currentTheme}
                    $isSelected={valueIcon === _id}
                    key={_id}
                    id={_id}
                    onClick={handleChangeIcon}
                    data-icon-id={_id}
                    isSelected={_id === valueIcon}
                  >
                    <ReactSVG src={icon_src} />
                  </IconReactSvgWrapper>
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
              {currentTheme === 'Light' && (
                <FormControlLabelStyled
                  value={lightImageBg?._id}
                  key={lightImageBg?._id}
                  selected={lightImageBg?._id === selectImgBg}
                  control={
                    <RadioStyledImg

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
                      onClick={() => handleTakeImgBg(lightImageBg?._id)}
                    />
                  }
                />
              )}
              {currentTheme === 'Violet' && (
                <FormControlLabelStyled
                  value={violetImageBg?._id}
                  key={violetImageBg?._id}
                  selected={violetImageBg?._id === selectImgBg}
                  control={
                    <RadioStyledImg

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
                      onClick={() => handleTakeImgBg(violetImageBg?._id)}
                    />
                  }
                />
              )}
              {currentTheme === 'Dark' && (
                <FormControlLabelStyled
                  value={darkImageBg?._id}
                  selected={darkImageBg?._id === selectImgBg}
                  key={darkImageBg?._id}
                  control={
                    <RadioStyledImg
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
                      onClick={() => handleTakeImgBg(darkImageBg?._id)}
                    />
                  }
                />
              )}

              {image &&
                imageNew.map(({ _id, background_icon_src }) => (
                  <FormControlLabelStyled
                    value={_id}
                    key={_id}
                    selected={_id === valueImgBg}
                    control={
                      <RadioStyledImg
                        icon={<Image src={background_icon_src} alt={_id} />}
                        checkedIcon={
                          <Image src={background_icon_src} alt={_id} checked />
                        }
                        onClick={() => handleTakeImgBg(_id)}
                      />
                    }
                  />
                ))}
            </ImageBgContainer>
          </DialogContent>

          <BaseBtn type={'submit'} label={'Create'} onClick={handleCloseBtn} />

          <CloseBtn onClick={createOpenModalShow} />
        </ContainerModal>
      </Dialog>
    </div>
  );
}
