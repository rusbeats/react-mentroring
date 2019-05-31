import { createSelector } from 'reselect';

// Homework 8: Reselect
export const filmsSelector = ({ data }) => data || [];
export const filmsCountSelector = ({ data }) => data.length;
export const isFetchingSelector = ({ isFetching }) => isFetching;
export const sortBySelector = ({ sortBy }) => sortBy;
export const searchBySelector = ({ searchBy }) => searchBy;
export const filmSelector = ({ film }) => film;
export const notFoundSelector = ({ notFound }) => notFound;

export const getFilmsState = createSelector(
    filmsSelector,
    filmsCountSelector,
    isFetchingSelector,
    sortBySelector,
    (films, filmsCount, isFetching, sortBy) => ({
        films,
        filmsCount,
        isFetching,
        sortBy
    })
);

export const getFilmDetailsState = createSelector(
    filmSelector,
    notFoundSelector,
    (filmFromState, notFound) => ({
        filmFromState,
        notFound
    })
);

export const getFilmsByGenreState = createSelector(
    isFetchingSelector,
    filmsSelector,
    notFoundSelector,
    (isFetching, films, notFound) => ({
        isFetching,
        films,
        notFound
    })
);

export const getHeaderState = createSelector(
    filmsCountSelector,
    sortBySelector,
    searchBySelector,
    (filmsCount, sortBy, searchBy) => ({
        filmsCount,
        sortBy,
        searchBy
    })
);
