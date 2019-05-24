import React from 'react';
import FilmItem from './FilmItem';

// Gallery (CSS grid) for films by the same genre
const FilmByTheSameGenre = () => (
  <div className="film-gallery">
    <FilmItem title="Gone with the wind" genre="action" itemReleaseDate="1992" imageurl="../src/img/gone.jpg" />
    <FilmItem title="Matrix" genre="action" itemReleaseDate="2002" imageurl="../src/img/matrix.jpg" />
    <FilmItem title="Avatar" genre="action" itemReleaseDate="2009" imageurl="../src/img/avatar.jpg" />
  </div>
);
export default FilmByTheSameGenre;
