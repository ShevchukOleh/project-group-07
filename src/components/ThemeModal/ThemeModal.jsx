import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  ThemeBtn,
  ThemeIcon,
  StyledMenu,
  Wrapper,
  StyledFormControl,
  StyledRadioGroup,
  StyledFormControlLabel,
  StyledRadio,
} from './ThemeModal.styled';
import Icon from '../../images/symbol-defs.svg';
import { fetchThemeUpdate } from 'store/AsyncThunk/asyncThunkUsersAuth';

const LIGHT = 'Light';
const DARK = 'Dark';
const COLORED = 'Violet';

export const ThemeModal = () => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [firstThemeStatus, setFirstThemeStatus] = useState(null);
  const [secondThemeStatus, setSecondThemeStatus] = useState(null);
  const [thirdThemeStatus, setThirdThemeStatus] = useState(null);

  const themes = [
    { name: LIGHT, status: firstThemeStatus },
    { name: DARK, status: secondThemeStatus },
    { name: COLORED, status: thirdThemeStatus },
  ];

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = event => {
    if (event.currentTarget.value === LIGHT) {
      setFirstThemeStatus('checked');
      setSecondThemeStatus(null);
      setThirdThemeStatus(null);
    }
    if (event.currentTarget.value === DARK) {
      setSecondThemeStatus('checked');
      setFirstThemeStatus(null);
      setThirdThemeStatus(null);
    }
    if (event.currentTarget.value === COLORED) {
      setThirdThemeStatus('checked');
      setFirstThemeStatus(null);
      setSecondThemeStatus(null);
    }

    const newTheme = { theme: event.currentTarget.value };
    dispatch(fetchThemeUpdate(newTheme));
  };

  return (
    <>
      <ThemeBtn
        id="theme-button"
        aria-controls={open ? 'theme-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Theme
        <ThemeIcon>
          <use href={`${Icon}#icon-chevron-down`}></use>
        </ThemeIcon>
      </ThemeBtn>

      <StyledMenu
        id="theme-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Wrapper>
          <StyledFormControl>
            <StyledRadioGroup
              aria-labelledby="radio-buttons-group-label"
              name="radio-buttons-group"
              onChange={handleChange}
            >
              {themes.map(({ name, status }) => (
                <StyledFormControlLabel
                  key={name}
                  value={name}
                  control={<StyledRadio />}
                  label={name}
                  labelPlacement="start"
                  themestatus={status}
                />
              ))}
            </StyledRadioGroup>
          </StyledFormControl>
        </Wrapper>
      </StyledMenu>
    </>
  );
};
