/* eslint-disable no-unused-vars */
import React from 'react';
import FilmPage from './Film/FilmPage';
import SearchPage from './Search/SearchPage';
import style from '../sass/style.scss';
// Main App component
const App = () => (
  <div>
    <SearchPage />
    <FilmPage />
  </div>
);
export default App;
