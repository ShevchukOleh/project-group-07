import { useState } from 'react';
import {
  Menu,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@mui/material';
import { FiltersBtn, FilterIcon } from './FiltersModal.styled';

export const FiltersModal = () => {
  return (
    <>
      <FiltersBtn>
        <FilterIcon />
        Filters
      </FiltersBtn>
    </>
  );
};
