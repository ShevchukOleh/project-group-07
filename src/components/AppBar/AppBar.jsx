import { useState } from 'react';
import {
  Header,
  MenuBtn,
  MenuIconNav,
  HeaderNav,
  ThemeBtn,
  ThemeIcon,
  UserInfoBtn,
  UserAvatar,
} from './AppBar.styled';
import Icon from '../../images/symbol-defs.svg';
import {
  Menu,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@mui/material';

export const AppBar = () => {
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
    <Header>
      <MenuBtn>
        <MenuIconNav />
      </MenuBtn>

      <HeaderNav>
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
              />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              <FormControlLabel
                value="violet"
                control={<Radio />}
                label="Violet"
              />
            </RadioGroup>
          </FormControl>
        </Menu>

        <UserInfoBtn>
          User
          <UserAvatar>
            <img src="" alt="User name" />
          </UserAvatar>
        </UserInfoBtn>
      </HeaderNav>
    </Header>
  );
};
