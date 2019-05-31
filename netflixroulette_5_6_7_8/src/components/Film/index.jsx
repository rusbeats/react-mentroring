import React from 'react';
import PropTypes from 'prop-types';
import { getYear } from '../../utils/helpers';
import { Image } from '../Image/Image.styles';
import { FilmTitleAndDateWrapper, FilmTitle, FilmDate, FilmGenres } from './Film.styles';

const Film = ({ film, onClick }) => {
    const releaseYear = getYear(film.release_date);
    const genresLength = film.genres.length;

    return (
        <div onClick={onClick}>
            <Image src={film.poster_path} />
            <FilmTitleAndDateWrapper>
                <FilmTitle>{film.title}</FilmTitle>
                <FilmDate>{releaseYear}</FilmDate>
            </FilmTitleAndDateWrapper>
            <FilmGenres>
                {film.genres.map((genre, index) => (index === genresLength - 1 ? genre : genre + ' & '))}
            </FilmGenres>
        </div>
    );
};

Film.propTypes = {
    film: PropTypes.object,
    onClick: PropTypes.func
};

export default Film;
