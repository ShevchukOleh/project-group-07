import { useState } from 'react';
import {
  Button,
  Menu,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
  FiltersBtn,
  FilterIcon,
  MenuLabel,
  Border,
  Wrapper,
  ShowAllBtn,
  MenuLabelWrap,
} from './FiltersModal.styled';

export const FiltersModal = () => {
  const [filterValue, setFilterValue] = useState('');
  const [filtersEl, setFiltersEl] = useState(null);
  const open = Boolean(filtersEl);

  const [withoutStatus, setWithoutStatus] = useState(null);
  const [lowStatus, setLowStatus] = useState(null);
  const [mediumStatus, setMediumStatus] = useState(null);
  const [highStatus, setHighStatus] = useState(null);

  const priorityColor = priorityStatus =>
    priorityStatus ? 'rgba(22, 22, 22, 1)' : 'rgba(22, 22, 22, 0.5)';

  const handleClick = event => {
    setFiltersEl(event.currentTarget);
  };

  const handleClose = () => {
    setFiltersEl(null);
  };

  const handleChange = event => {
    setFilterValue(event.currentTarget.value);
    console.log(event.currentTarget.value);

    if (event.currentTarget.value === 'without priority') {
      setWithoutStatus(true);
      setLowStatus(null);
      setMediumStatus(null);
      setHighStatus(null);
    }
    if (event.currentTarget.value === 'low') {
      setWithoutStatus(null);
      setLowStatus(true);
      setMediumStatus(null);
      setHighStatus(null);
    }
    if (event.currentTarget.value === 'medium') {
      setWithoutStatus(null);
      setLowStatus(null);
      setMediumStatus(true);
      setHighStatus(null);
    }
    if (event.currentTarget.value === 'high') {
      setWithoutStatus(null);
      setLowStatus(null);
      setMediumStatus(null);
      setHighStatus(true);
    }
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
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
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
        <MenuLabelWrap>
          <MenuLabel>Filters</MenuLabel>

          <Button
            onClick={handleClose}
            sx={{
              padding: 0,
              minWidth: '18px',
              height: '18px',
              position: 'absolute',
              top: '-15px',
              right: '-15px',
            }}
          >
            <CloseOutlinedIcon
              sx={{
                minWidth: '18px',
                height: '18px',
                fill: 'rgba(22, 22, 22, 1)',
              }}
            />
          </Button>
        </MenuLabelWrap>

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
                sx={{
                  '& .MuiTypography-root': {
                    color: priorityColor(withoutStatus),
                  },
                }}
              />
              <FormControlLabel
                value="low"
                control={
                  <Radio sx={{ background: 'rgba(143, 161, 208, 1)' }} />
                }
                label="Low"
                sx={{
                  '& .MuiTypography-root': { color: priorityColor(lowStatus) },
                }}
              />
              <FormControlLabel
                value="medium"
                control={
                  <Radio sx={{ backgroundColor: 'rgba(224, 156, 181, 1)' }} />
                }
                label="Medium"
                sx={{
                  '& .MuiTypography-root': {
                    color: priorityColor(mediumStatus),
                  },
                }}
              />
              <FormControlLabel
                value="high"
                control={
                  <Radio sx={{ background: 'rgba(190, 219, 176, 1)' }} />
                }
                label="High"
                sx={{
                  '& .MuiTypography-root': { color: priorityColor(highStatus) },
                }}
              />
            </RadioGroup>
          </FormControl>
          <ShowAllBtn onClick={handleShowAllBtnClick}>Show all</ShowAllBtn>
        </Wrapper>
      </Menu>
    </>
  );
};
