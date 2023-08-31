import { createTheme } from '@mui/material';

const currentTheme = 'light';

const lightTheme = {
  first: 'rgba(22, 22, 22, 0.8)',
  second: '#161616',
  third: 'rgba(190,219,176,1)',
};

const darkTheme = {
  first: '#fff',
  second: '#fcfcfc',
};

const coloredTheme = { first: '#ececec', second: '#DBBEb0' };

const getTheme = theme => {
  switch (theme) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    case 'colored':
      return coloredTheme;
    default:
      return lightTheme;
  }
};

const themeSet = getTheme(currentTheme);

export const theme = createTheme({
  themeSet,
});

console.log(theme);
