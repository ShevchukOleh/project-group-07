import { useEffect, useState } from 'react';
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
  MenuWrap,
} from './FiltersModal.styled';

import { getTheme } from 'constants';
import { getCurrentUser } from 'store/createSlices/userAuth/userSelectors';

import { useDispatch, useSelector } from 'react-redux';
import { sortByPriority } from 'store/createSlices/board/board';
import {
  filteredAllCards,
  selectAllColumnCards,
  selectedInPriority,
} from 'store/createSlices/board/boardSelectors';

export const FiltersModal = () => {
  const user = useSelector(getCurrentUser);
  const currentTheme = user?.theme || 'Light';
  const theme = getTheme(currentTheme);
  const dispatch = useDispatch();
  const columnCards = useSelector(selectAllColumnCards);
  const filteredAllCard = useSelector(filteredAllCards);

  const selectPriority = useSelector(selectedInPriority);
  const [filterValue, setFilterValue] = useState('');
  const [filtersEl, setFiltersEl] = useState(null);
  const open = Boolean(filtersEl);
  const [objCards, setObjCards] = useState({});
  const [filteredCards, setFilteredCards] = useState({});


  const [withoutStatus, setWithoutStatus] = useState(null);
  const [lowStatus, setLowStatus] = useState(null);
  const [mediumStatus, setMediumStatus] = useState(null);
  const [highStatus, setHighStatus] = useState(null);

  const priorityColor = priorityStatus =>
    priorityStatus
      ? theme?.themeSet?.modalFiltersSubtitleFocus
      : theme?.themeSet?.modalFiltersSubtitle;

  const bgPriorityColor = (priorityStatus, bgColor) =>
    priorityStatus ? 'transparent' : bgColor;

  const handleClick = event => {
    setFiltersEl(event.currentTarget);
  };
  const handleClose = () => {
    setFiltersEl(null);
  };
  useEffect(() => {
    setObjCards(columnCards);
    setFilterValue(selectPriority);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columnCards, filteredAllCard]);
  useEffect(() => {
    setFilteredCards(objCards);
  }, [filteredCards, objCards]);
  const handleChange = event => {
    setFilterValue(event.currentTarget.value);
    const choosePriority = event.currentTarget.value;

    let filteredObjCards = {};
    if (choosePriority === 'Show all') {
      setFilteredCards(objCards);
    } else {
      for (let key in objCards) {
        if (objCards.hasOwnProperty(key) && Array.isArray(objCards[key])) {
          const filtered = objCards[key].filter(item =>
            item.priority.toLowerCase().includes(choosePriority.toLowerCase())
          );

          if (filtered.length > 0) {
            filteredObjCards[key] = filtered;
          }
        }
      }
    }

    dispatch(sortByPriority(filteredObjCards));
    setFilteredCards(filteredObjCards);

    // ===========================================>sort
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
    if (event.target.id === 'Show all') {
      dispatch(sortByPriority(objCards));
      setWithoutStatus(null);
      setLowStatus(null);
      setMediumStatus(null);
      setHighStatus(null);
    }
  };

  return (
    <>
      <FiltersBtn
        id="filters-button"
        aria-controls={open ? 'filters-menu' : undefined}
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
          '& ul': {
            padding: 0,
          },
          '& ul > div': {
            backgroundColor: `${theme?.themeSet?.modalFiltersBg}`,
            borderRadius: '8px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: `${theme?.themeSet?.modalFiltersOutBorder}`,
            boxShadow: '0px 4px 16px 0px rgba(22, 22, 22, 0.05)',
          },
        }}
      >
        <MenuWrap>
          <MenuLabelWrap>
            <MenuLabel>Filters</MenuLabel>

            <Button
              onClick={handleClose}
              sx={{
                padding: 0,
                minWidth: '18px',
                height: '18px',
                position: 'absolute',
                top: '10px',
                right: '8px',
              }}
            >
              <CloseOutlinedIcon
                sx={{
                  minWidth: '18px',
                  height: '18px',
                  fill: `${theme?.themeSet?.modalFiltersTitle}`,
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
                  color: `${theme?.themeSet?.modalFiltersTitle}`,
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
                  '& label .MuiTypography-root': {
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: 1.5,
                    letterSpacing: '0.02em',
                  },
                  '& label .MuiButtonBase-root': { padding: 0 },
                  '& label > span span svg': { width: '14px', height: '14px' },
                }}
              >
                <FormControlLabel
                  value="without"
                  control={
                    <Radio
                      sx={{
                        backgroundColor: bgPriorityColor(
                          withoutStatus,
                          `${theme?.themeSet?.modalFiltersMarkWithoutPr}`
                        ),
                        '& span svg': {
                          color: `${theme?.themeSet?.modalFiltersMarkWithoutPr}`,
                        },
                      }}
                    />
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
                    <Radio
                      sx={{
                        backgroundColor: bgPriorityColor(lowStatus, '#8FA1D0'),
                        '& span svg': { color: '#8FA1D0' },
                      }}
                    />
                  }
                  label="Low"
                  sx={{
                    '& .MuiTypography-root': {
                      color: priorityColor(lowStatus),
                    },
                  }}
                />
                <FormControlLabel
                  value="medium"
                  control={
                    <Radio
                      sx={{
                        backgroundColor: bgPriorityColor(
                          mediumStatus,
                          '#E09CB5'
                        ),
                        '& span svg': { color: '#E09CB5' },
                      }}
                    />
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
                    <Radio
                      sx={{
                        backgroundColor: bgPriorityColor(highStatus, '#BEDBB0'),
                        '& span svg': { color: '#BEDBB0' },
                      }}
                    />
                  }
                  label="High"
                  sx={{
                    '& .MuiTypography-root': {
                      color: priorityColor(highStatus),
                    },
                  }}
                />
              </RadioGroup>
            </FormControl>
            <ShowAllBtn onClick={handleShowAllBtnClick} id="Show all">
              Show all
            </ShowAllBtn>
          </Wrapper>
        </MenuWrap>
      </Menu>
    </>
  );
};
