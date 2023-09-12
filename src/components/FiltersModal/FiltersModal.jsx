import { useEffect, useState } from 'react';
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
  StyledRadio,
  ShowAllBtn,
  MenuLabelWrap,
  MenuWrap,
} from './FiltersModal.styled';

import { ModalTitle } from 'components/Modals/ModalTitle';
import { CloseBtn } from 'components/Buttons/CloseBtn';

import { useDispatch, useSelector } from 'react-redux';
import { sortByPriority } from 'store/createSlices/board/board';
import {
  filteredAllCards,
  selectAllColumnCards,
  selectedInPriority,
} from 'store/createSlices/board/boardSelectors';
import { priorityNames } from 'constants';

const { LOW, MEDIUM, HIGH, WITHOUT_PRIORITY, SHOW_ALL } = priorityNames;

export const FiltersModal = () => {
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

  const priorities = [
    { name: WITHOUT_PRIORITY, status: withoutStatus },
    { name: LOW, status: lowStatus },
    { name: MEDIUM, status: mediumStatus },
    { name: HIGH, status: highStatus },
  ];

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

    if (choosePriority === SHOW_ALL) {
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
    if (event.currentTarget.value === WITHOUT_PRIORITY) {
      setWithoutStatus('checked');
      setLowStatus(null);
      setMediumStatus(null);
      setHighStatus(null);
    }
    if (event.currentTarget.value === LOW) {
      setWithoutStatus(null);
      setLowStatus('checked');
      setMediumStatus(null);
      setHighStatus(null);
    }
    if (event.currentTarget.value === MEDIUM) {
      setWithoutStatus(null);
      setLowStatus(null);
      setMediumStatus('checked');
      setHighStatus(null);
    }
    if (event.currentTarget.value === HIGH) {
      setWithoutStatus(null);
      setLowStatus(null);
      setMediumStatus(null);
      setHighStatus('checked');
    }
  };

  const handleShowAllBtnClick = event => {
    if (event.target.id === SHOW_ALL) {
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
                {priorities.map(({ name, status }) => (
                  <StyledFormControlLabel
                    key={name}
                    value={name}
                    control={
                      <StyledRadio priority={name} prioritystatus={status} />
                    }
                    label={name}
                    prioritystatus={status}
                  />
                ))}
              </StyledRadioGroup>
            </StyledFormControl>

            <ShowAllBtn onClick={handleShowAllBtnClick} id={SHOW_ALL}>
              {SHOW_ALL}
            </ShowAllBtn>
          </Wrapper>
        </MenuWrap>
      </StyledMenu>
    </>
  );
};
