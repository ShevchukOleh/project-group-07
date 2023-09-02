import { createTheme } from '@mui/material';

const currentTheme = 'light';

const lightTheme = {
  headerBg: '#FCFCFC',
  headerMenuBtn: '#161616',

  boardBg: '#F6F6F7',

  sidebarBg: '#FFFFFF',
  sidebarLogo: '#FFFFFF',
  sidebarLogoBg: '#1F1F1F',
  sidebarText: '#161616',
  sidebarCreateConBg: '#FFFFFF',
  sidebarCreateConBorder: 'rgba(22, 22, 22, 0.1)',
  sidebarCreateBtnBg: '#BEDBB0',
  iconPlus: '#121212',
  sidebarBlock: '#F6F6F7',
  sidebarBlockLink: '#BEDBB0',

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

  modalHelpBg: '#FCFCFC',
  modalHelpTitle: '#161616',
  modalHelpSendBg: '#BEDBB0',
  modalHelpSendText: '#161616',
};

const darkTheme = {
  headerBg: '#161616',
  headerMenuBtn: '#FFFFFF',

  boardBg: '#121212',

  sidebarBg: '#121212',
  sidebarLogo: '#FFFFFF',
  sidebarLogoBg: '#1F1F1F',
  sidebarText: '#FFFFFF',
  sidebarCreateConBg: '#121212',
  sidebarCreateConBorder: 'rgba(255, 255, 255, 0.1)',
  sidebarCreateBtnBg: '#BEDBB0',
  iconPlus: '#121212',
  sidebarBlock: '#1F1F1F',
  sidebarBlockLink: '#BEDBB0',

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

  modalHelpBg: '#151515',
  modalHelpTitle: '#FFFFFF',
  modalHelpSendBg: '#BEDBB0',
  modalHelpSendText: '#161616',
};

const coloredTheme = {
  headerBg: '#FFFFFF',
  headerMenuBtn: '#161616',

  boardBg: '#ECEDFD',

  sidebarBg: '#5255BC',
  sidebarLogo: '#5255BC',
  sidebarLogoBg: '#FFFFFF',
  sidebarText: '#FFFFFF',
  sidebarCreateConBg: '#5255BC',
  sidebarCreateConBorder: 'rgba(255, 255, 255, 0.1)',
  sidebarCreateBtnBg: '#B8BCFD',
  iconPlus: '#FFFFFF',
  sidebarBlock: 'rgba(236, 237, 253, 0.4)',
  sidebarBlockLink: '#5255BC',

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

  modalHelpBg: '#FCFCFC',
  modalHelpTitle: '#161616',
  modalHelpSendBg: '#5255BC',
  modalHelpSendText: '#FFFFFF',
};

const getTheme = theme => {
  switch (theme) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    case 'violet':
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
