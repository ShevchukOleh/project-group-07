import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Menu,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@mui/material';
import { ThemeBtn, ThemeIcon, Wrapper } from './ThemeModal.styled';
import Icon from '../../images/symbol-defs.svg';
import { getTheme } from 'constants';
import { getCurrentUser } from 'store/createSlices/userAuth/userSelectors';
import { fetchThemeUpdate } from 'store/AsyncThunk/asyncThunkUsersAuth';

const LIGHT = 'Light';
const DARK = 'Dark';
const COLORED = 'Violet';

export const ThemeModal = () => {
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const currentTheme = user?.theme || 'Light';
  const theme = getTheme(currentTheme);

  console.log(user);
  console.log(theme);
  console.log(currentTheme);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [firstThemeStatus, setFirstThemeStatus] = useState(null);
  const [secondThemeStatus, setSecondThemeStatus] = useState(null);
  const [thirdThemeStatus, setThirdThemeStatus] = useState(null);

  const themeBtnColor = themeStatus =>
    themeStatus
      ? theme?.themeSet?.modalThemeTitleFocus
      : theme?.themeSet?.modalThemeTitle;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = event => {
    console.log(event.currentTarget.value);

    if (event.currentTarget.value === LIGHT) {
      setFirstThemeStatus(true);
      setSecondThemeStatus(null);
      setThirdThemeStatus(null);
    }
    if (event.currentTarget.value === DARK) {
      setSecondThemeStatus(true);
      setFirstThemeStatus(null);
      setThirdThemeStatus(null);
    }
    if (event.currentTarget.value === COLORED) {
      setThirdThemeStatus(true);
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

      <Menu
        id="theme-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          '& ul': {
            padding: 0,
          },
          '& ul > div': {
            borderRadius: '4px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: `${theme?.themeSet?.modalThemeBorder}`,
            boxShadow: '0px 4px 16px 0px rgba(17, 17, 17, 0.1)',
          },
        }}
      >
        <Wrapper>
          <FormControl
            sx={{
              width: 100,
              height: 107,
              justifyContent: 'center',
            }}
          >
            <FormLabel id="radio-buttons-group-label"></FormLabel>
            <RadioGroup
              aria-labelledby="radio-buttons-group-label"
              defaultValue={LIGHT}
              name="radio-buttons-group"
              onChange={handleChange}
              sx={{
                display: 'flex',
                gap: '4px',
                justifyContent: 'normal',
                alignContent: 'center',
                '& label .MuiTypography-root': {
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                },
                '& label .MuiButtonBase-root': { visibility: 'hidden' },
              }}
            >
              <FormControlLabel
                value={LIGHT}
                control={<Radio sx={{ padding: 0, width: 1, height: 1 }} />}
                label="Light"
                labelPlacement="start"
                sx={{
                  marginLeft: 0,
                  justifyContent: 'flex-end',
                  maxWidth: 100,
                  '& .MuiTypography-root': {
                    color: themeBtnColor(firstThemeStatus),
                  },
                }}
              />

              <FormControlLabel
                value={DARK}
                control={<Radio sx={{ padding: 0, width: 1, height: 1 }} />}
                label="Dark"
                labelPlacement="start"
                sx={{
                  marginLeft: 0,
                  justifyContent: 'flex-end',
                  maxWidth: 100,
                  '& .MuiTypography-root': {
                    color: themeBtnColor(secondThemeStatus),
                  },
                }}
              />

              <FormControlLabel
                value={COLORED}
                control={<Radio sx={{ padding: 0, width: 1, height: 1 }} />}
                label="Violet"
                labelPlacement="start"
                sx={{
                  marginLeft: 0,
                  justifyContent: 'flex-end',
                  maxWidth: 100,
                  '& .MuiTypography-root': {
                    color: themeBtnColor(thirdThemeStatus),
                  },
                }}
              />
            </RadioGroup>
          </FormControl>
        </Wrapper>
      </Menu>
    </>
  );
};
