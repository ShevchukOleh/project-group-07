import { createTheme } from '@mui/material';

const currentTheme = 'light';

const lightTheme = {
  headerBg: '#FCFCFC',
  headerMenuBtn: '#161616',

  sidebarCreateBoardText: '#161616',
  sidebarCreateBtnBg: '#BEDBB0',
  iconPlus: '#121212',

  modalThemeLabel: 'rgba(22, 22, 22, 0.8)',
  modalThemeTitle: '#161616',
  modalThemeTitleFocus: '#BEDBB0',
  modalThemeBorder: '#BEDBB0',
  modalThemeBg: '#FCFCFC',

  modalFiltersLabel: 'rgba(22, 22, 22, 0.8)',
  modalFiltersBg: '#FCFCFC',
  modalFiltersOutBorder: '#FCFCFC',
  modalFiltersInnerBorder: 'rgba(22, 22, 22, 0.1)',
  modalFiltersTitle: '#161616',
  modalFiltersSubtitle: 'rgba(22, 22, 22, 0.5)',
  modalFiltersSubtitleFocus: '#161616',
  modalFiltersMarkWithoutPr: 'rgba(22, 22, 22, 0.3)',
};

const darkTheme = {
  headerBg: '#161616',
  headerMenuBtn: '#FFFFFF',

  sidebarCreateBoardText: '#FFFFFF',
  sidebarCreateBtnBg: '#BEDBB0',
  iconPlus: '#121212',

  modalThemeLabel: 'rgba(255, 255, 255, 0.8)',
  modalThemeTitle: 'rgba(255, 255, 255, 0.5)',
  modalThemeTitleFocus: '#BEDBB0',
  modalThemeBorder: '#BEDBB0',
  modalThemeBg: '#151515',

  modalFiltersLabel: 'rgba(255, 255, 255, 0.8)',
  modalFiltersBg: '#151515',
  modalFiltersOutBorder: '#BEDBB0',
  modalFiltersInnerBorder: 'rgba(255, 255, 255, 0.1)',
  modalFiltersTitle: '#FFFFFF',
  modalFiltersSubtitle: 'rgba(255, 255, 255, 0.5)',
  modalFiltersSubtitleFocus: '#FFFFFF',
  modalFiltersMarkWithoutPr: 'rgba(255, 255, 255, 0.3)',
};

const coloredTheme = {
  headerBg: '#FFFFFF',
  headerMenuBtn: '#161616',

  sidebarCreateBoardText: '#161616',
  sidebarCreateBtnBg: '#B8BCFD',
  iconPlus: '#FFFFFF',

  modalThemeLabel: 'rgba(22, 22, 22, 0.8)',
  modalThemeTitle: '#161616',
  modalThemeTitleFocus: '#5255BC',
  modalThemeBorder: '#5255BC',
  modalThemeBg: '#FCFCFC',

  modalFiltersLabel: 'rgba(22, 22, 22, 0.8)',
  modalFiltersBg: '#FCFCFC',
  modalFiltersOutBorder: '#FCFCFC',
  modalFiltersInnerBorder: 'rgba(22, 22, 22, 0.1)',
  modalFiltersTitle: '#161616',
  modalFiltersSubtitle: 'rgba(22, 22, 22, 0.5)',
  modalFiltersSubtitleFocus: '#161616',
  modalFiltersMarkWithoutPr: 'rgba(22, 22, 22, 0.3)',
};

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
