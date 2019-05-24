/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const FilmCover = props => (
  <div className="film-cover">
    <img className="film-image" src={props.filmImage} />
  </div>
);
export default FilmCover;
