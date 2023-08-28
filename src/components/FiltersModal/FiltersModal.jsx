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
  const [filterValue, setFilterValue] = useState('');
  const [filtersEl, setFiltersEl] = useState(null);
  const open = Boolean(filtersEl);

  const handleClick = event => {
    setFiltersEl(event.currentTarget);
  };

  const handleClose = () => {
    setFiltersEl(null);
  };

  const handleChange = event => {
    setFilterValue(event.currentTarget.value);
    console.log(event.currentTarget.value);
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
        sx={{
          '& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
            boxShadow: '0px 4px 16px 0px rgba(22, 22, 22, 0.05)',
          },
        }}
      >
        Filters
        <FormControl
          sx={{
            width: 300,
            height: 234,
            justifyContent: 'center',
          }}
        >
          <FormLabel id="filters-radio-buttons-group-label">
            Label color
          </FormLabel>
          <RadioGroup
            aria-labelledby="filters-radio-buttons-group-label"
            name="filters-radio-buttons-group"
            value={filterValue}
            onChange={handleChange}
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
