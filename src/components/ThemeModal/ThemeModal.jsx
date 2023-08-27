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
        sx={{
          '& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
            borderRadius: '8px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'rgba(190,219,176,1)',
            boxShadow: '0px 4px 16px 0px rgba(17, 17, 17, 0.1)',
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
            }}
          >
            <FormControlLabel
              value="light"
              control={<Radio sx={{ padding: 0, width: 1, height: 1 }} />}
              label="Light"
              labelPlacement="start"
              sx={{
                marginLeft: 0,
                justifyContent: 'flex-end',
                maxWidth: 100,
                fontFamily: 'Poppins',
              }}
            />
            <FormControlLabel
              value="dark"
              control={<Radio sx={{ padding: 0 }} />}
              label="Dark"
              labelPlacement="start"
              sx={{ marginLeft: 0, justifyContent: 'flex-end', maxWidth: 100 }}
            />
            <FormControlLabel
              value="violet"
              control={<Radio sx={{ padding: 0 }} />}
              label="Violet"
              labelPlacement="start"
              sx={{ marginLeft: 0, justifyContent: 'flex-end', maxWidth: 100 }}
            />
          </RadioGroup>
        </FormControl>
      </Menu>
    </>
  );
};
