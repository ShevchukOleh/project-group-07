import { useEffect, useState } from 'react';
import { Radio } from '@mui/material';
import {
  FiltersBtn,
  FilterIcon,
  StyledMenu,
  Border,
  Wrapper,
  StyledFormControl,
  StyledFormLabel,
  StyledRadioGroup,
  StyledFormControlLabel,
  ShowAllBtn,
  MenuLabelWrap,
  MenuWrap,
} from './FiltersModal.styled';

import { ModalTitle } from 'components/Modals/ModalTitle';
import { CloseBtn } from 'components/Buttons/CloseBtn';
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
      setWithoutStatus('checked');
      setLowStatus(null);
      setMediumStatus(null);
      setHighStatus(null);
    }
    if (event.currentTarget.value === 'low') {
      setWithoutStatus(null);
      setLowStatus('checked');
      setMediumStatus(null);
      setHighStatus(null);
    }
    if (event.currentTarget.value === 'medium') {
      setWithoutStatus(null);
      setLowStatus(null);
      setMediumStatus('checked');
      setHighStatus(null);
    }
    if (event.currentTarget.value === 'high') {
      setWithoutStatus(null);
      setLowStatus(null);
      setMediumStatus(null);
      setHighStatus('checked');
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

      <StyledMenu
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
      >
        <MenuWrap>
          <MenuLabelWrap>
            <ModalTitle title={'Filters'} />

            <CloseBtn onClick={handleClose} />
          </MenuLabelWrap>

          <Border />

          <Wrapper>
            <StyledFormControl>
              <StyledFormLabel id="filters-radio-buttons-group-label">
                Label color
              </StyledFormLabel>

              <StyledRadioGroup
                aria-labelledby="filters-radio-buttons-group-label"
                name="filters-radio-buttons-group"
                value={filterValue}
                onChange={handleChange}
              >
                <StyledFormControlLabel
                  value="without priority"
                  control={
                    <Radio
                      prioritystatus={withoutStatus}
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
                  prioritystatus={withoutStatus}
                />

                <StyledFormControlLabel
                  value="low"
                  control={
                    <Radio
                      prioritystatus={lowStatus}
                      sx={{
                        backgroundColor: bgPriorityColor(lowStatus, '#8FA1D0'),
                        '& span svg': { color: '#8FA1D0' },
                      }}
                    />
                  }
                  label="Low"
                  prioritystatus={lowStatus}
                />

                <StyledFormControlLabel
                  value="medium"
                  control={
                    <Radio
                      prioritystatus={mediumStatus}
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
                  prioritystatus={mediumStatus}
                />

                <StyledFormControlLabel
                  value="high"
                  control={
                    <Radio
                      prioritystatus={highStatus}
                      sx={{
                        backgroundColor: bgPriorityColor(highStatus, '#BEDBB0'),
                        '& span svg': { color: '#BEDBB0' },
                      }}
                    />
                  }
                  label="High"
                  prioritystatus={highStatus}
                />
              </StyledRadioGroup>
            </StyledFormControl>

            <ShowAllBtn onClick={handleShowAllBtnClick} id="Show all">
              Show all
            </ShowAllBtn>
          </Wrapper>
        </MenuWrap>
      </StyledMenu>
    </>
  );
};
