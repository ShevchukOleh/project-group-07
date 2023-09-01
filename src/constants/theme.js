import { createTheme } from '@mui/material';

const currentTheme = 'colored';

const lightTheme = {
  headerBg: '#FCFCFC',
  headerMenuBtn: '#161616',

  sidebarBg: '#FFFFFF',
  sidebarLogo: '#FFFFFF',
  sidebarLogoBg: '#1F1F1F',
  sidebarLogoText: '#161616',
  sidebarCreateConBg: '#FFFFFF',
  sidebarCreateConBorder: 'rgba(22, 22, 22, 0.1)',
  sidebarCreateBoardText: '#161616',
  sidebarCreateBtnBg: '#BEDBB0',
  iconPlus: '#121212',
  sidebarBlock: '#F6F6F7',
  sidebarBlockLink: '#BEDBB0',
  logoutBtn: '#161616',

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

  sidebarBg: '#121212',
  sidebarLogo: '#FFFFFF',
  sidebarLogoBg: '#1F1F1F',
  sidebarLogoText: '#FFFFFF',
  sidebarCreateConBg: '#121212',
  sidebarCreateConBorder: 'rgba(255, 255, 255, 0.1)',
  sidebarCreateBoardText: '#FFFFFF',
  sidebarCreateBtnBg: '#BEDBB0',
  iconPlus: '#121212',
  sidebarBlock: '#1F1F1F',
  sidebarBlockLink: '#BEDBB0',
  logoutBtn: '#FFFFFF',

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

  sidebarBg: '#5255BC',
  sidebarLogo: '#5255BC',
  sidebarLogoBg: '#FFFFFF',
  sidebarLogoText: '#FFFFFF',
  sidebarCreateConBg: '#5255BC',
  sidebarCreateConBorder: 'rgba(255, 255, 255, 0.1)',
  sidebarCreateBoardText: '#FFFFFF',
  sidebarCreateBtnBg: '#B8BCFD',
  iconPlus: '#FFFFFF',
  sidebarBlock: 'rgba(236, 237, 253, 0.4)',
  sidebarBlockLink: '#5255BC',
  logoutBtn: '#FFFFFF',

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
