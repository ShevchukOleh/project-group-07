import { useEffect, useState } from 'react';
import { getTheme } from 'constants';
import { getCurrentUser } from 'store/createSlices/userAuth/userSelectors';
import { useSelector } from 'react-redux';
import { StyledInput } from './SideBarSearch.styled';

const SideBarSearch = ({ boardsList, setFilteredItems }) => {
  const [searchText, setSearchText] = useState('');

  const user = useSelector(getCurrentUser);
  const currentTheme = user?.theme || 'Light';
  const theme = getTheme(currentTheme);

  const [focusInput, setFocusInput] = useState(false);

  const inputBorderColor = inputStatus =>
    inputStatus
      ? theme?.themeSet?.inputBorderFocus
      : theme?.themeSet?.inputBorder;

  const handleSearchTextChange = event => {
    const query = event.target.value.toLowerCase();
    setSearchText(query);
  };
  useEffect(() => {
    const filtered = boardsList.filter(item =>
      item.title.toLowerCase().includes(searchText)
    );

    setFilteredItems(filtered);
  }, [searchText, boardsList, setFilteredItems]);

  return (
    <StyledInput
      id="standard-multiline-flexible"
      type="text"
      placeholder="My boards"
      value={searchText}
      onChange={handleSearchTextChange}
      onFocus={() => setFocusInput(true)}
      onBlur={() => setFocusInput(false)}
      style={{ borderColor: inputBorderColor(focusInput) }}
    />
  );
};

export default SideBarSearch;
