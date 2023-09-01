import { useEffect, useState } from 'react';
import { Search } from './SideBarSearch.styled';

const SideBarSearch = ({ boardsList, setFilteredItems }) => {
  const [searchText, setSearchText] = useState('');

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
    <Search
      id="standard-multiline-flexible"
      label="My boards"
      multiline
      maxRows={4}
      variant="standard"
      value={searchText}
      onChange={handleSearchTextChange}
    />
  );
};

export default SideBarSearch;
