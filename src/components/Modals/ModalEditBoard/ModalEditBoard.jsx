import * as React from 'react';
import Dialog from '@mui/material/Dialog';
// import Loader from 'components/Loader/Loader';
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
  StyledButton,
  StyledBox,
  PlusIcon,
  IconReactSvgWrapper,
} from './ModalEditBoard.styled.js';
import FormControl from '@mui/material/FormControl';
import { getTheme } from 'constants';
import { getCurrentUser } from 'store/createSlices/userAuth/userSelectors';
import { useState } from 'react';
import { useEffect } from 'react';
import { getIcon, getImage } from '../ModalBoard/servises';
import { useSelector } from 'react-redux';
import { selectToken } from 'store/createSlices/userAuth/userSelectors';
import { IconClose } from '../UI/ModalCulumn.styled';
import { CloseBtn } from '../NeedHelp/NeedHelpModal.styled';
import { IconWrapper } from '../ModalBoard/ModalBoard.styled';
import { ReactSVG } from 'react-svg';

export default function ModalEditFormDialog({
  editBoardIcon,
  closeEditModal,
  isOpenEditModal,
  handleSubmit,
  editBoard,
  setEditBoard,
  handleChangeIcon,
  editBoardImg,
  takeIMG,
  setIsOpenEditModal,
  error,
}) {
  const user = useSelector(getCurrentUser);
  const currentTheme = user?.theme;
  const theme = getTheme(currentTheme);
  const token = useSelector(selectToken);
  const [icon, setIcon] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    getIcon(token)
      .then(data => {
        setIcon(data);
      })
      .catch()
      .finally(() => {});
  }, [token]);
  useEffect(() => {
    setImage([]);
    getImage(token)
      .then(data => {
        setImage(data);
      })
      .catch()
      .finally(() => {});
  }, [token]);

  const length = image.length - 3;
  const imageNew = image.slice(0, length);
  const lightImageBg = image[15];
  const darkImageBg = image[16];
  const violetImageBg = image[17];

  return (
    <div>
      <Dialog open={isOpenEditModal} onClose={closeEditModal}>
        <ContainerModal>
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
              id="title"
              label="Project office"
              type="text"
              placeholder="Project office"
              value={editBoard}
              required
              onChange={e => setEditBoard(e.target.value)}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
            {error && (
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
                    $isSelected={editBoardIcon === _id}
                    key={_id}
                    id={_id}
                    onClick={handleChangeIcon}
                    data-icon-id={_id}
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
              aria-labelledby="image-edit-group"
              defaultValue="noBackground"
              name="image-edit-group"
              value={editBoardImg}
            >
              {currentTheme === 'Light' && (
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
              )}
              {currentTheme === 'Dark' && (
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
              )}
              {currentTheme === 'Violet' && (
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
                        onClick={() => takeIMG(_id)}
                      />
                    }
                  />
                ))}
            </ImageBgContainer>
          </DialogContent>

          <DialogActionsStyled>
            <StyledButton
              onClick={handleSubmit}
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
              Edit Board
            </StyledButton>
          </DialogActionsStyled>
          <CloseBtn>
            <IconClose onClick={() => setIsOpenEditModal(prev => !prev)} />
          </CloseBtn>
        </ContainerModal>
      </Dialog>
    </div>
  );
}
