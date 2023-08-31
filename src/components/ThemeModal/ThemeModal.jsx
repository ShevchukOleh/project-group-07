import { useState } from 'react';
import {
  Menu,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@mui/material';
import { ThemeBtn, ThemeIcon } from './ThemeModal.styled';
import Icon from '../../images/symbol-defs.svg';

const LIGHT = "light";
const DARK = "dark";
const COLORED = "violet";

export const ThemeModal = () => {
  const [themeValue, setThemeValue] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [firstThemeStatus, setFirstThemeStatus] = useState(null);
  const [secondThemeStatus, setSecondThemeStatus] = useState(null);
  const [thirdThemeStatus, setThirdThemeStatus] = useState(null);

  const themeBtnColor = themeStatus =>  themeStatus ? 'rgba(190,219,176,1)' : '#161616';

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = event => {
    setThemeValue(event.currentTarget.value);
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
          '& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
            borderRadius: '8px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'rgba(190,219,176,1)',
            boxShadow: '0px 4px 16px 0px rgba(17, 17, 17, 0.1)',
            backgroundColor: '#FCFCFC',
          },
          '& ul': {
            padding: 0,
          },
        }}
      >
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
            name="radio-buttons-group"
            value={themeValue}
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
                '& .MuiTypography-root': { color: themeBtnColor(firstThemeStatus) },
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
                '& .MuiTypography-root': { color: themeBtnColor(secondThemeStatus) },
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
                '& .MuiTypography-root': { color: themeBtnColor(thirdThemeStatus) },
              }}
            />
          </RadioGroup>
        </FormControl>
      </Menu>
    </>
  );
};
