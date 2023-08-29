import styled from '@emotion/styled';
import { Button } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

export const FiltersBtn = styled(Button)`
  gap: 8px;
  color: rgba(22, 22, 22, 0.8);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  text-transform: none;
  letter-spacing: 0.02em;
`;

export const FilterIcon = styled(FilterAltOutlinedIcon)`
  width: 16px;
  height: 16px;
  fill: currentColor;
`;

export const MenuLabel = styled.span`
  display: block;
  margin-bottom: 10px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02em;
`;

export const Border = styled.div`
  display: block;
  height: 1px;
  margin-bottom: 10px;
  background-color: rgba(22, 22, 22, 0.1);
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const ShowAllBtn = styled(Button)`
  display: flex;
  height: 18px;
  padding: 0;
  text-decoration: underline;
  color: rgba(22, 22, 22, 0.5);
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  text-transform: none;
  letter-spacing: 0.02em;
`;
