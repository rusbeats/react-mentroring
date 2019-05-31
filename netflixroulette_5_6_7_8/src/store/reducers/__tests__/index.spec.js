import reducer from '../index';
import * as types from '../../actions/actions';

const INITIAL_STATE = {
    data: [],
    film: {},
    isFetching: false,
    sortBy: 'rating',
    searchBy: 'title',
    notFound: false
};

describe('root reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should handle REQUEST_FILMS', () => {
        expect(
            reducer(INITIAL_STATE, {
                type: types.REQUEST_FILMS
            })
        ).toEqual({
            data: [],
            film: {},
            isFetching: true,
            sortBy: 'rating',
            searchBy: 'title',
            notFound: false
        });
    });

    it('should handle REQUEST_FILM_BY_ID', () => {
        expect(
            reducer(INITIAL_STATE, {
                type: types.REQUEST_FILM_BY_ID
            })
        ).toEqual({
            data: [],
            film: {},
            isFetching: true,
            sortBy: 'rating',
            searchBy: 'title',
            notFound: false
        });
    });

    it('should handle RECEIVE_FILMS', () => {
        const payload = [{ film1: 'film1Data' }, { film2: 'film2Data' }];
        expect(
            reducer(INITIAL_STATE, {
                type: types.RECEIVE_FILMS,
                payload
            })
        ).toEqual({
            data: payload,
            film: {},
            isFetching: false,
            sortBy: 'rating',
            searchBy: 'title',
            notFound: false
        });
    });

    it('should handle RECEIVE_FILM_BY_ID', () => {
        const payload = { film1: 'film1Data' };
        expect(
            reducer(INITIAL_STATE, {
                type: types.RECEIVE_FILM_BY_ID,
                payload
            })
        ).toEqual({
            data: [],
            film: payload,
            isFetching: false,
            sortBy: 'rating',
            searchBy: 'title',
            notFound: false
        });
    });

    it('should handle TOGGLE_SORTING', () => {
        const payload = 'sortBy';
        expect(
            reducer(INITIAL_STATE, {
                type: types.TOGGLE_SORTING,
                payload
            })
        ).toEqual({
            data: [],
            film: {},
            isFetching: false,
            sortBy: payload,
            searchBy: 'title',
            notFound: false
        });
    });

    it('should handle TOGGLE_SEARCH_BY', () => {
        const payload = 'searchBy';
        expect(
            reducer(INITIAL_STATE, {
                type: types.TOGGLE_SEARCH_BY,
                payload
            })
        ).toEqual({
            data: [],
            film: {},
            isFetching: false,
            sortBy: 'rating',
            searchBy: payload,
            notFound: false
        });
    });

    it('should handle GET_FILM_FROM_STATE', () => {
        const payload = { film1: 'film1Data' };
        expect(
            reducer(INITIAL_STATE, {
                type: types.GET_FILM_FROM_STATE,
                payload
            })
        ).toEqual({
            data: [],
            film: payload,
            isFetching: false,
            sortBy: 'rating',
            searchBy: 'title',
            notFound: false
        });
    });

    it('should handle FILM_NOT_FOUND', () => {
        expect(
            reducer(INITIAL_STATE, {
                type: types.FILM_NOT_FOUND
            })
        ).toEqual({
            data: [],
            film: {},
            isFetching: false,
            sortBy: 'rating',
            searchBy: 'title',
            notFound: true
        });
    });
});
