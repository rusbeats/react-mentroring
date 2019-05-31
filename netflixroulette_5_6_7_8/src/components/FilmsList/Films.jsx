import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Film from '../Film';
import Loader from 'react-loader-spinner';
import { getFilmFromState } from '../../store/actions';
import NotFound from '../NotFound';
import { StyledLink } from '../Link/Link.styles';
import { StyledFilms, StyledLoader } from './Base.styles';
import constants from '../../utils/constants';
import Link from 'next/link';
import { getFilmsState } from '../../selectors';

const { colors } = constants;

export const Films = ({ isFetching, films, sortBy, filmsCount, getFilm }) => {
    if (filmsCount === 0) {
        return <NotFound />;
    }

    if (isFetching) {
        return (
            <StyledLoader>
                <Loader type="Puff" color="#00BFFF" height="300" width="300" />;
            </StyledLoader>
        );
    }

    let sortedFilms;

    if (sortBy === 'rating') {
        sortedFilms = films.sort((a, b) => b.vote_average - a.vote_average);
    }

    if (sortBy === 'releaseDate') {
        sortedFilms = films.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    }

    const handleGetFilm = film => () => getFilm(film);

    return (
        <StyledFilms>
            {sortedFilms.map(film => (
                <Link href={`/film?id=${film.id}`} as={`/film/${film.id}`} key={film.id}>
                    <StyledLink color={colors.black}>
                        <Film film={film} onClick={handleGetFilm(film)} />
                    </StyledLink>
                </Link>
            ))}
        </StyledFilms>
    );
};

StyledFilms.displayName = 'Films';

Films.propTypes = {
    films: PropTypes.array,
    filmsCount: PropTypes.number,
    isFetching: PropTypes.bool,
    sortBy: PropTypes.string,
    getFilm: PropTypes.func
};

const mapStateToProps = state => getFilmsState(state);

const mapDispatchToProps = dispatch => ({
    getFilm: film => dispatch(getFilmFromState(film))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Films);
