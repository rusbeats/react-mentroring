// @flow
import React from 'react';
// Hardcoding the value only for homework #3
// const duration = '152 min';
// const releaseYear = '2002';

// Homework 8: implemented Flow
type FilmProps = {
  filmReleaseYear: number;
  filmDuration: number;
};

const FilmDurationAndReleaseYear = (props:FilmProps) => (
  <div className="film-duration-and-release-year">
    <span>
      {props.filmDuration}
      {' '}
&nbsp;
      {' '}
      {props.filmReleaseYear}
    </span>
  </div>
);
export default FilmDurationAndReleaseYear;
