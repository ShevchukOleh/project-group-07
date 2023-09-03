import { createTheme } from '@mui/material';

const currentTheme = 'violet';

const lightTheme = {
  headerBg: '#FCFCFC',
  headerMenuBtn: '#161616',

  boardTitle: '#161616',
  boardBg: '#F6F6F7',
  boardEmptyText: 'rgba(22, 22, 22, 0.7)',

  cardBg: '#FFFFFF',
  cardDescription: 'rgba(22, 22, 22, 0.7)',
  cardPriorityTitle: 'rgba(22, 22, 22, 0.5)',
  cardPriorityIcon: 'rgba(22, 22, 22, 0.5)',

  sidebarBg: '#FFFFFF',
  sidebarLogo: '#FFFFFF',
  sidebarLogoBg: '#1F1F1F',
  sidebarText: '#161616',
  sidebarCreateConBg: '#FFFFFF',
  sidebarCreateConBorder: 'rgba(22, 22, 22, 0.1)',
  sidebarCreateBtnBg: '#FFFFFF',
  sidebarCreateBtnBgHover: '#BEDBB0',
  sidebarCreateBtnBorder: '#BEDBB0',
  iconPlus: '#121212',
  sidebarBlock: '#F6F6F7',
  sidebarTextWitoutHover: 'rgba(22, 22, 22, 0.5)',
  sidebarBlockLink: '#BEDBB0',
  sidebarBoardIndication: '#BEDBB0',

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
  modalHelpBorder: '#FCFCFC',
  modalHelpTitle: '#161616',
  modalHelpSendBg: '#FCFCFC',
  modalHelpSendBorder: '#BEDBB0',
  modalHelpSendText: '#161616',
  modalHelpSendHover: '#BEDBB0',
  modalHelpSendHoverText: '#161616',
  inputBorder: '#CCC',
  inputBorderFocus: '#BEDBB0',
  inputColor: '#161616',
  inputBgColor: '#FCFCFC',

  createBtnIcon: '#FFFFFF',
  createBtnIconBg: '#161616',
};

const darkTheme = {
  headerBg: '#161616',
  headerMenuBtn: '#FFFFFF',

  boardTitle: '#FFFFFF',
  boardBg: '#121212',
  boardEmptyText: 'rgba(255, 255, 255, 0.5)',

  cardBg: '#121212',
  cardDescription: 'rgba(255, 255, 255, 0.5)',
  cardPriorityTitle: 'rgba(255, 255, 255, 0.5)',
  cardPriorityIcon: 'rgba(255, 255, 255, 0.5)',

  sidebarBg: '#121212',
  sidebarLogo: '#FFFFFF',
  sidebarLogoBg: '#1F1F1F',
  sidebarText: '#FFFFFF',
  sidebarCreateConBg: '#121212',
  sidebarCreateConBorder: 'rgba(255, 255, 255, 0.1)',
  sidebarCreateBtnBg: '#FFFFFF',
  sidebarCreateBtnBgHover: '#BEDBB0',
  sidebarCreateBtnBorder: '#BEDBB0',
  iconPlus: '#121212',
  sidebarBlock: '#1F1F1F',
  sidebarTextWitoutHover: 'rgba(255, 255, 255, 0.5)',
  sidebarBlockLink: '#BEDBB0',
  sidebarBoardIndication: '#BEDBB0',

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
  modalHelpBorder: 'rgba(190, 219, 176, 0.5)',
  modalHelpTitle: '#FFFFFF',
  modalHelpSendBg: '#1F1F1F',
  modalHelpSendBorder: '#BEDBB0',
  modalHelpSendText: '#FFFFFF',
  modalHelpSendHover: '#BEDBB0',
  modalHelpSendHoverText: '#161616',
  inputBorder: 'rgba(255, 255, 255, 0.5)',
  inputBorderFocus: '#BEDBB0',
  inputColor: '#FFFFFF',
  inputBgColor: '#1F1F1F',

  createBtnIcon: '#FFFFFF',
  createBtnIconBg: '#161616',
};

const coloredTheme = {
  headerBg: '#FFFFFF',
  headerMenuBtn: '#161616',

  boardTitle: '#161616',
  boardBg: '#ECEDFD',
  boardEmptyText: 'rgba(22, 22, 22, 0.7)',

  cardBg: '#FFFFFF',
  cardDescription: 'rgba(22, 22, 22, 0.7)',
  cardPriorityTitle: 'rgba(22, 22, 22, 0.5)',
  cardPriorityIcon: 'rgba(22, 22, 22, 0.5)',

  sidebarBg: '#5255BC',
  sidebarLogo: '#5255BC',
  sidebarLogoBg: '#FFFFFF',
  sidebarText: '#FFFFFF',
  sidebarCreateConBg: '#5255BC',
  sidebarCreateConBorder: 'rgba(255, 255, 255, 0.1)',
  sidebarCreateBtnBg: '#5255BC',
  sidebarCreateBtnBgHover: 'rgba(236, 237, 253, 0.4)',
  sidebarCreateBtnBorder: 'rgba(236, 237, 253, 0.4)',
  iconPlus: '#FFFFFF',
  sidebarBlock: 'rgba(236, 237, 253, 0.4)',
  sidebarTextWitoutHover: 'rgba(255, 255, 255, 0.5)',
  sidebarBlockLink: '#5255BC',
  sidebarBoardIndication: '#FFFFFF',

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
  modalHelpBorder: '#FCFCFC',
  modalHelpTitle: '#161616',
  modalHelpSendBg: '#FCFCFC',
  modalHelpSendBorder: '#5255BC',
  modalHelpSendText: '#161616',
  modalHelpSendHover: '#5255BC',
  modalHelpSendHoverText: '#FCFCFC',
  inputBorder: '#CCC',
  inputBorderFocus: '#5255BC',
  inputColor: '#161616',
  inputBgColor: '#FCFCFC',

  createBtnIcon: '#161616',
  createBtnIconBg: '#FFFFFF',
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
