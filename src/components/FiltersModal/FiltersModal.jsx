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
  const [filtersEl, setFiltersEl] = useState(null);
  const open = Boolean(filtersEl);

  const handleClick = event => {
    setFiltersEl(event.currentTarget);
  };

  const handleClose = () => {
    setFiltersEl(null);
  };

  return (
    <>
      <FiltersBtn
        id="filters-button"
        aria-controls={open ? 'theme-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <FilterIcon />
        Filters
      </FiltersBtn>

      <Menu
        id="filters-menu"
        anchorEl={filtersEl}
        open={open}
        onClose={handleClose}
      >
        <FormControl
          sx={{
            width: 300,
            height: 234,
            justifyContent: 'center',
          }}
        >
          <FormLabel id="filters-radio-buttons-group-label">Filters</FormLabel>
          <RadioGroup
            aria-labelledby="filters-radio-buttons-group-label"
            defaultValue="without priority"
            name="filters-radio-buttons-group"
          >
            <FormControlLabel
              value="without priority"
              control={<Radio />}
              label="Without priority"
            />
            <FormControlLabel value="low" control={<Radio />} label="Low" />
            <FormControlLabel
              value="medium"
              control={<Radio />}
              label="Medium"
            />
            <FormControlLabel value="high" control={<Radio />} label="High" />
          </RadioGroup>
        </FormControl>
      </Menu>
    </>
  );
};
