import React from 'react';
import FilmPanel from './FilmPanel';
import FilmByTheSameGenre from '../Item/FilmByTheSameGenre';

const FilmPage = () => (
  <div className="film-page">
    <FilmPanel />
    <FilmByTheSameGenre />
  </div>
);
export default FilmPage;
