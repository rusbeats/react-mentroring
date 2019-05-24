import React from 'react';
import FilmTitle from './FilmTitle';
import FilmCover from './FilmCover';
import FilmDurationAndReleaseYear from './FilmDurationAndReleaseYear';
import FilmRating from './FilmRating';
import Description from './Description';
import SearchButton from './SearchButton';

const FilmPanel = () => (
  <div className="film-panel">
    <FilmCover filmImage="../../src/img/matrix.jpg" />
    <div className="film-info">
      <div className="film-title-and-rating">
        <FilmTitle />
        {' '}
        <FilmRating />
      </div>
      <FilmDurationAndReleaseYear filmDuration="152 min" filmReleaseYear="2002" />
      <Description />
    </div>
    <SearchButton />
  </div>
);
export default FilmPanel;
