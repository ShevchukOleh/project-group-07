import styled from '@emotion/styled';
import {
  Button,
  Menu,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { priorityNames, priorityColors } from 'constants';

const TRANSPARENT = 'transparent';
const { LOW, MEDIUM, HIGH } = priorityNames;
const { lowPriorityColor, mediumPriorityColor, highPriorityColor } =
  priorityColors;

export const FiltersBtn = styled(Button)`
  padding: 0 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  gap: 8px;
  color: ${props => {
    return props?.theme?.themeSet?.modalFiltersLabel;
  }};
  color: black;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  text-transform: none;
  letter-spacing: 0.02em;
  :hover {
    background-color: rgba(255, 255, 255, 1);
  }
`;

export const FilterIcon = styled(FilterAltOutlinedIcon)`
  width: 16px;
  height: 16px;
  fill: currentColor;
`;

export const StyledMenu = styled(Menu)`
  & ul {
    padding: 0;
  }

  & ul > div {
    background-color: ${props => {
      return props?.theme?.themeSet?.modalFiltersBg;
    }};
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => {
      return props?.theme?.themeSet?.modalFiltersOutBorder;
    }};
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
  }
`;

export const Border = styled.div`
  display: block;
  height: 1px;
  margin-bottom: 14px;
  background-color: ${props => {
    return props?.theme?.themeSet?.modalFiltersInnerBorder;
  }};
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

export const StyledFormControl = styled(FormControl)`
  width: 188px;
  justify-content: center;
`;

export const StyledFormLabel = styled(FormLabel)`
  margin-bottom: 10px;
  color: ${props => {
    return props?.theme?.themeSet?.modalFiltersTitle;
  }};
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.02em;
`;

export const StyledRadioGroup = styled(RadioGroup)`
  & {
    gap: 8px;
  }

  & label {
    margin: 0;
    gap: 8px;
  }

  & label .MuiTypography-root {
    font-family: Poppins;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0.02em;
  }

  & label .MuiButtonBase-root {
    padding: 0;
  }

  & label > span span svg {
    width: 14px;
    height: 14px;
  }
`;

const priorityLabelColor = (prioritystatus, theme) =>
  prioritystatus
    ? theme?.themeSet?.modalFiltersSubtitleFocus
    : theme?.themeSet?.modalFiltersSubtitle;

export const StyledFormControlLabel = styled(FormControlLabel)`
  & .MuiTypography-root {
    color: ${({ prioritystatus, theme }) =>
      priorityLabelColor(prioritystatus, theme)};
  }
`;

const withoutPrColor = theme => {
  return theme?.themeSet?.modalFiltersMarkWithoutPr;
};

const priorityInputColor = (priority, theme) => {
  switch (priority) {
    case LOW:
      return lowPriorityColor;
    case MEDIUM:
      return mediumPriorityColor;
    case HIGH:
      return highPriorityColor;
    default:
      return withoutPrColor(theme);
  }
};

const priorityInputBgColor = (priority, prioritystatus, theme) => {
  switch (priority) {
    case LOW:
      return prioritystatus ? TRANSPARENT : lowPriorityColor;
    case MEDIUM:
      return prioritystatus ? TRANSPARENT : mediumPriorityColor;
    case HIGH:
      return prioritystatus ? TRANSPARENT : highPriorityColor;
    default:
      return prioritystatus ? TRANSPARENT : withoutPrColor(theme);
  }
};

export const StyledRadio = styled(Radio)`
  background-color: ${({ priority, prioritystatus, theme }) =>
    priorityInputBgColor(priority, prioritystatus, theme)};

  & span svg {
    color: ${({ priority, theme }) => priorityInputColor(priority, theme)};
  }
`;

export const ShowAllBtn = styled(Button)`
  display: flex;
  height: 18px;
  padding: 0;
  text-decoration: underline;
  color: ${props => {
    return props?.theme?.themeSet?.modalFiltersSubtitle;
  }};
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  text-transform: none;
  letter-spacing: 0.02em;
`;

export const MenuLabelWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MenuWrap = styled.div`
  position: relative;
  padding: 26px 24px;
`;
