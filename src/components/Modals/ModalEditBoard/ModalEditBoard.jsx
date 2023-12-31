import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {
  RadioStyledImg,
  ImageBgContainer,
  Image,
  ContainerModal,
  TextFieldStyled,
  FormControlLabelStyled,
  IconReactSvgWrapper,
} from './ModalEditBoard.styled.js';
import FormControl from '@mui/material/FormControl';
import { getTheme } from 'constants';
import { getCurrentUser } from 'store/createSlices/userAuth/userSelectors';
import { useState, useEffect } from 'react';
import { getIcon, getImage } from '../ModalBoard/servises';
import { useSelector } from 'react-redux';
import { selectToken } from 'store/createSlices/userAuth/userSelectors';
import { CloseBtn } from 'components/Buttons/CloseBtn';
import { IconWrapper } from '../ModalBoard/ModalBoard.styled';
import { ReactSVG } from 'react-svg';
import { ModalTitle } from '../ModalTitle';
import { BaseBtn } from 'components/Buttons/BaseBtn';

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
  const [selectedIconId, setSelectedIconId] = useState(null);
  const [selectImgBg, setSelectImgBg] = useState(null);

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
  const darkImageBg = image[17];
  const violetImageBg = image[16];

  const handleIconClick = _id => {
    setSelectedIconId(_id);
    handleChangeIcon(_id);
  };

  const handleTakeImgBg = _id => {
    setSelectImgBg(_id);
    takeIMG(_id);
  };

  return (
    <div>
      <Dialog open={isOpenEditModal} onClose={closeEditModal}>
        <ContainerModal>
          <ModalTitle title={'Edit board'} />

          <DialogContent sx={{ padding: 0 }}>
            <TextFieldStyled
              id="title"
              label="Project office"
              type="text"
              placeholder="Project office"
              value={editBoard}
              required
              onChange={e => setEditBoard(e.target.value)}
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
                    data-icon-id={_id}
                    onClick={() => handleIconClick(_id)}
                    isSelected={_id === selectedIconId}
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
                    selected={_id === selectImgBg}
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

          <BaseBtn type={'submit'} label={'Edit'} onClick={handleSubmit} />
          
          <CloseBtn onClick={() => setIsOpenEditModal(prev => !prev)} />
        </ContainerModal>
      </Dialog>
    </div>
  );
}