import { useState } from 'react';
import {
  Menu,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@mui/material';
import {
  FiltersBtn,
  FilterIcon,
  MenuLabel,
  Border,
  Wrapper,
  ShowAllBtn,
} from './FiltersModal.styled';

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

  const handleShowAllBtnClick = event => {
    console.log('Show all');
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
            padding: '26px 24px',
            borderRadius: '8px',
            boxShadow: '0px 4px 16px 0px rgba(22, 22, 22, 0.05)',
            backgroundColor: '#FCFCFC',
          },
          '& ul': {
            padding: 0,
          },
          '& ul > span': { color: '#161616' },
        }}
      >
        <MenuLabel>Filters</MenuLabel>
        <Border />
        <Wrapper>
          <FormControl
            sx={{
              width: 188,
              justifyContent: 'center',
            }}
          >
            <FormLabel
              id="filters-radio-buttons-group-label"
              sx={{
                marginBottom: '10px',
                color: 'rgba(22, 22, 22, 1)',
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: 1.5,
                letterSpacing: '0.02em',
              }}
            >
              Label color
            </FormLabel>

            <RadioGroup
              aria-labelledby="filters-radio-buttons-group-label"
              name="filters-radio-buttons-group"
              value={filterValue}
              onChange={handleChange}
              sx={{
                '&': { gap: '8px' },
                '& label': { margin: 0, gap: '8px' },
                '& label span': {
                  padding: 0,
                  color: 'rgba(22, 22, 22, 0.5)',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: 1.5,
                  letterSpacing: '0.02em',
                },
              }}
            >
              <FormControlLabel
                value="without priority"
                control={
                  <Radio sx={{ backgroundColor: 'rgba(22, 22, 22, 0.3)' }} />
                }
                label="Without priority"
              />
              <FormControlLabel
                value="low"
                control={
                  <Radio sx={{ background: 'rgba(143, 161, 208, 1)' }} />
                }
                label="Low"
              />
              <FormControlLabel
                value="medium"
                control={
                  <Radio sx={{ backgroundColor: 'rgba(224, 156, 181, 1)' }} />
                }
                label="Medium"
              />
              <FormControlLabel
                value="high"
                control={
                  <Radio sx={{ background: 'rgba(190, 219, 176, 1)' }} />
                }
                label="High"
              />
            </RadioGroup>
          </FormControl>
          <ShowAllBtn onClick={handleShowAllBtnClick}>Show all</ShowAllBtn>
        </Wrapper>
      </Menu>
    </>
  );
};
