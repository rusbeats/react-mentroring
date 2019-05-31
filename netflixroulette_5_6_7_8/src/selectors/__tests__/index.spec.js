import React from 'react';
import {
    getFilmsState,
    getFilmDetailsState,
    getFilmsByGenreState,
    getHeaderState,
    filmsSelector,
    filmsCountSelector,
    isFetchingSelector,
    sortBySelector,
    searchBySelector,
    filmSelector,
    notFoundSelector
} from '../index';

const INITIAL_STATE = {
    data: [{ id: 1 }, { id: 2 }, { id: 3 }],
    film: { id: 4 },
    filmsCount: 3,
    isFetching: false,
    sortBy: 'rating',
    searchBy: 'genre',
    notFound: false
};

const NO_INITIAL_STATE = {};

const filmsState = getFilmsState;
const filmDetailsState = getFilmDetailsState;
const filmsByGenreState = getFilmsByGenreState;
const headerState = getHeaderState;

describe('selectors', () => {
    it('should have correct films', () => {
        expect(filmsSelector(INITIAL_STATE)).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    });

    it('should have correct films without initial state', () => {
        expect(filmsSelector(NO_INITIAL_STATE)).toEqual([]);
    });

    it('should have correct filmsCount', () => {
        expect(filmsCountSelector(INITIAL_STATE)).toEqual(3);
    });

    it('should have correct isFetching', () => {
        expect(isFetchingSelector(INITIAL_STATE)).toBeFalsy();
    });

    it('should have correct sortBy', () => {
        expect(sortBySelector(INITIAL_STATE)).toEqual('rating');
    });

    it('should have correct searchBy', () => {
        expect(searchBySelector(INITIAL_STATE)).toEqual('genre');
    });

    it('should have correct film', () => {
        expect(filmSelector(INITIAL_STATE)).toEqual({ id: 4 });
    });

    it('should have correct notFound', () => {
        expect(notFoundSelector(INITIAL_STATE)).toBeFalsy();
    });
});

describe('combined selectors', () => {
    it('should have correct films state', () => {
        const selected = filmsState.resultFunc(
            INITIAL_STATE.data,
            INITIAL_STATE.filmsCount,
            INITIAL_STATE.isFetching,
            INITIAL_STATE.sortBy
        );

        expect(selected).toEqual({
            films: [{ id: 1 }, { id: 2 }, { id: 3 }],
            filmsCount: 3,
            isFetching: false,
            sortBy: 'rating'
        });
    });

    it('should have correct film state', () => {
        const selected = filmDetailsState.resultFunc(INITIAL_STATE.film, INITIAL_STATE.notFound);

        expect(selected).toEqual({
            filmFromState: { id: 4 },
            notFound: false
        });
    });

    it('should have correct films by genre state', () => {
        const selected = filmsByGenreState.resultFunc(
            INITIAL_STATE.isFetching,
            INITIAL_STATE.data,
            INITIAL_STATE.notFound
        );

        expect(selected).toEqual({
            isFetching: false,
            films: [{ id: 1 }, { id: 2 }, { id: 3 }],
            notFound: false
        });
    });

    it('should have correct header state', () => {
        const selected = headerState.resultFunc(INITIAL_STATE.filmsCount, INITIAL_STATE.sortBy, INITIAL_STATE.searchBy);

        expect(selected).toEqual({
            filmsCount: 3,
            sortBy: 'rating',
            searchBy: 'genre'
        });
    });
});
