import { createTheme } from '@mui/material';

const lightTheme = {
  headerBg: '#FCFCFC',
  headerMenuBtn: '#161616',
  headerProfileBtnText: '#161616',

  editProfileAvIconWrapBg: '#BEDBB0',

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
  sidebarCreateBtnBg: '#BEDBB0',
  sidebarCreateBtnBgHover: '#9DC888',
  sidebarCreateBtnBorder: '#BEDBB0',
  iconPlus: '#121212',
  sidebarBlock: '#F6F6F7',
  sidebarTextWitoutHover: 'rgba(22, 22, 22, 0.5)',
  sidebarBlockLink: '#BEDBB0',
  sidebarBoardIndication: '#BEDBB0',

  modalAddCardSubtitle: 'rgba(22, 22, 22, 0.5)',

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
  modalHelpSendBg: '#BEDBB0',
  modalHelpSendBorder: '#BEDBB0',
  modalHelpSendText: '#161616',
  modalHelpSendHover: '#9DC888',
  inputBorder: '#CCC',
  inputBorderFocus: '#BEDBB0',
  inputColor: '#161616',
  inputBgColor: '#FCFCFC',
  inputPlaceholder: 'rgba(22, 22, 22, 0.5)',
  inputOtherBorder: '#CCC',
  inputOtherHover: '#BEDBB0',

  createBtnIcon: '#FFFFFF',
  createBtnIconBg: '#161616',

  boxIconBg: '#121212',
  iconFill: '#FFFFFF',

  addColumnBtnBg: '#FFFFFF',
  addColumnIconBox: '#161616',
  addColumnIcon: '#FFFFFF',
  addColumnText: '#161616',

  calendar: '#BEDBB0',
};

const darkTheme = {
  headerBg: '#161616',
  headerMenuBtn: '#FFFFFF',
  headerProfileBtnText: '#FFFFFF',

  editProfileAvIconWrapBg: '#BEDBB0',

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
  sidebarCreateBtnBg: '#BEDBB0',
  sidebarCreateBtnBgHover: '#9DC888',
  sidebarCreateBtnBorder: '#BEDBB0',
  iconPlus: '#121212',
  sidebarBlock: '#1F1F1F',
  sidebarTextWitoutHover: 'rgba(255, 255, 255, 0.5)',
  sidebarBlockLink: '#BEDBB0',
  sidebarBoardIndication: '#BEDBB0',

  modalAddCardSubtitle: 'rgba(255, 255, 255, 0.5)',

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
  modalHelpSendBg: '#BEDBB0',
  modalHelpSendBorder: '#BEDBB0',
  modalHelpSendText: '#161616',
  modalHelpSendHover: '#9DC888',
  inputBorder: 'rgba(190, 219, 176, 0.5)',
  inputBorderFocus: '#BEDBB0',
  inputColor: '#FFFFFF',
  inputBgColor: '#1F1F1F',
  inputPlaceholder: 'rgba(255, 255, 255, 0.5)',
  inputOtherBorder: '#BEDBB0',
  inputOtherHover: '#FFFFFF',

  createBtnIcon: '#FFFFFF',
  createBtnIconBg: '#161616',

  boxIconBg: '#121212',
  iconFill: '#FFFFFF',

  addColumnBtnBg: '#121212',
  addColumnIconBox: '#FFFFFF',
  addColumnIcon: '#121212',
  addColumnText: '#FFFFFF',

  calendar: '#BEDBB0',
};

const coloredTheme = {
  headerBg: '#FFFFFF',
  headerMenuBtn: '#161616',
  headerProfileBtnText: '#161616',
  
  editProfileAvIconWrapBg: '#CCC',

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
  sidebarCreateBtnBg: '#B8BCFD',
  sidebarCreateBtnBgHover: '#979CEA',
  sidebarCreateBtnBorder: 'rgba(236, 237, 253, 0.4)',
  iconPlus: '#FFFFFF',
  sidebarBlock: 'rgba(236, 237, 253, 0.4)',
  sidebarTextWitoutHover: 'rgba(255, 255, 255, 0.5)',
  sidebarBlockLink: '#5255BC',
  sidebarBoardIndication: '#FFFFFF',

  modalAddCardSubtitle: 'rgba(22, 22, 22, 0.5)',

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
  modalHelpSendBg: '#5255BC',
  modalHelpSendBorder: '#5255BC',
  modalHelpSendText: '#FFFFFF',
  modalHelpSendHover: '#7B7EDE',
  inputBorder: '#979CEA',
  inputBorderFocus: '#5255BC',
  inputColor: '#161616',
  inputBgColor: '#FCFCFC',
  inputPlaceholder: 'rgba(22, 22, 22, 0.5)',
  inputOtherBorder: '#CCC',
  inputOtherHover: '#5255BC',

  createBtnIcon: '#161616',
  createBtnIconBg: '#FFFFFF',

  boxIconBg: '#FFFFFF',
  iconFill: '#121212',

  addColumnBtnBg: '#FFFFFF',
  addColumnIconBox: '#5255BC',
  addColumnIcon: '#FFFFFF',
  addColumnText: '#161616',

  calendar: '#5255BC',
};

export const themeNames = { LIGHT: 'Light', DARK: 'Dark', COLORED: 'Violet' };
const { LIGHT, DARK, COLORED } = themeNames;

const getThemeSet = themeSet => {
  switch (themeSet) {
    case LIGHT:
      return lightTheme;
    case DARK:
      return darkTheme;
    case COLORED:
      return coloredTheme;
    default:
      return lightTheme;
  }
};

export const getTheme = themeName => {
  const themeSet = getThemeSet(themeName);
  return createTheme({ themeSet });
};
