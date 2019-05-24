/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import TitleButton from './TitleButton';
import GenreButton from './GenreButton';
import RedSearchButton from './RedSearchButton';
import SearchBar from './SearchBar';

const SearchPanel = () => (
  <div className="search-panel">
    <label>find your movie</label>
    <SearchBar />
    <div className="three-button-row">
      <label>search by</label>
      {' '}
      <TitleButton />
      <GenreButton />
      <RedSearchButton />
    </div>
  </div>
);
export default SearchPanel;
