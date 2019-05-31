import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Film from '../Film';
import { connect } from 'react-redux';
import { getFilmFromState } from '../../store/actions';
import { StyledLink } from '../Link/Link.styles';
import { StyledFilms, StyledLoader } from './Base.styles';
import constants from '../../utils/constants';
import Link from 'next/link';
import { getFilmsByGenreState } from '../../selectors';

const { colors } = constants;

export const FilmsByGenre = ({ isFetching, getFilm, films, notFound }) => {
    if (notFound) {
        return null;
    }

    if (isFetching) {
        return (
            <StyledLoader>
                <Loader type="Puff" color="#00BFFF" height="300" width="300" />;
            </StyledLoader>
        );
    }

    const handleGetFilm = film => () => getFilm(film);

    return (
        <StyledFilms>
            {films.map(film => (
                <Link href={`/film?id=${film.id}`} as={`/film/${film.id}`} key={film.id}>
                    <StyledLink color={colors.black}>
                        <Film film={film} onClick={handleGetFilm(film)} />
                    </StyledLink>
                </Link>
            ))}
        </StyledFilms>
    );
};

StyledFilms.displayName = 'FilmsByGenre';

FilmsByGenre.propTypes = {
    isFetching: PropTypes.bool,
    getFilm: PropTypes.func,
    films: PropTypes.array,
    notFound: PropTypes.bool
};

const mapStateToProps = state => getFilmsByGenreState(state);

const mapDispatchToProps = dispatch => ({
    getFilm: film => dispatch(getFilmFromState(film))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmsByGenre);
