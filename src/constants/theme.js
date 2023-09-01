import { createTheme } from '@mui/material';

const currentTheme = 'light';

const lightTheme = {
  first: 'rgba(22, 22, 22, 0.8)',
  second: '#161616',
  third: '#BEDBB0',
  fourth: '#FCFCFC',
};

const darkTheme = {
  first: 'rgba(255, 255, 255, 0.8)',
  second: 'rgba(255, 255, 255, 0.5)',
  third: '#BEDBB0',
  fourth: 'rgba(21, 21, 21, 1)',
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
