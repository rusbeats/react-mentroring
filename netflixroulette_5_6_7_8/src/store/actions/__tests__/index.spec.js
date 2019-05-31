import * as actions from '../index';
import * as types from '../actions';

describe('actions', () => {
    it('should request films', () => {
        expect(actions.requestFilms()).toEqual({
            type: types.REQUEST_FILMS,
            payload: null
        });
    });

    it('should request film by id', () => {
        expect(actions.requestFilmById()).toEqual({
            type: types.REQUEST_FILM_BY_ID,
            payload: null
        });
    });

    it('should receive films', () => {
        const payload = {};
        expect(actions.receiveFilms(payload)).toEqual({
            type: types.RECEIVE_FILMS,
            payload
        });
    });

    it('should receive film by id', () => {
        const payload = {};
        expect(actions.receiveFilmById(payload)).toEqual({
            type: types.RECEIVE_FILM_BY_ID,
            payload
        });
    });

    it('should toggle sorting', () => {
        const payload = 'sortBy';
        expect(actions.toggleSorting(payload)).toEqual({
            type: types.TOGGLE_SORTING,
            payload
        });
    });

    it('should toggle searchBy', () => {
        const payload = 'searchBy';
        expect(actions.toggleSearchBy(payload)).toEqual({
            type: types.TOGGLE_SEARCH_BY,
            payload
        });
    });

    it('should get film from state', () => {
        const payload = {};
        expect(actions.getFilmFromState(payload)).toEqual({
            type: types.GET_FILM_FROM_STATE,
            payload
        });
    });

    it('should have film not found type', () => {
        expect(actions.filmNotFound()).toEqual({
            type: types.FILM_NOT_FOUND,
            payload: null
        });
    });
});
