import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../pages/PostPages';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <div>
      <input type="text" placeholder="search title" onChange={handleSearch} />
      <button>find</button>
    </div>
  );
};

export default SearchBar;
