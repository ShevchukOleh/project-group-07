import styled from '@emotion/styled';
import { Button } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

export const FiltersBtn = styled(Button)`
  position: absolute;
  top: 13px;
  right: 0px;
  padding: 0 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  gap: 8px;
  color: ${props => {
    return props?.theme?.themeSet?.modalFiltersLabel;
  }};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  text-transform: none;
  letter-spacing: 0.02em;
  @media screen and (min-width: 768px) {
    top: 25px;
  }

  @media screen and (min-width: 1440px) {
    top: 30px;
  }
  :hover {
    background-color: rgba(255, 255, 255, 1);
  }
`;

export const FilterIcon = styled(FilterAltOutlinedIcon)`
  width: 16px;
  height: 16px;
  fill: currentColor;
`;

export const MenuLabel = styled.span`
  display: block;
  margin-bottom: 14px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: ${props => {
    return props?.theme?.themeSet?.modalFiltersTitle;
  }};
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
