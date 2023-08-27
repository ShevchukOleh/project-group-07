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

export const ThemeModal = () => {
  const [themeValue, setThemeValue] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = event => {
    setThemeValue(event.currentTarget.value);
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
      >
        <FormControl>
          <FormLabel id="radio-buttons-group-label"></FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            name="radio-buttons-group"
            value={themeValue}
            onChange={handleChange}
          >
            <FormControlLabel
              value="light"
              control={<Radio />}
              label="Light"
              labelPlacement="start"
            />
            <FormControlLabel
              value="dark"
              control={<Radio />}
              label="Dark"
              labelPlacement="start"
            />
            <FormControlLabel
              value="violet"
              control={<Radio />}
              label="Violet"
              labelPlacement="start"
            />
          </RadioGroup>
        </FormControl>
      </Menu>
    </>
  );
};
