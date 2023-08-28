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
