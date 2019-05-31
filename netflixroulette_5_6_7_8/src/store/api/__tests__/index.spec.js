import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getFilmById, getFilms } from '../index';
import * as types from '../../actions/actions';
import { FILMS_URL } from '../api';
import fetchMock from 'fetch-mock';
import { REHYDRATE } from 'redux-persist';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('REQUEST_FILMS when fetching films has been done', () => {
        const data = [{ film1: 'film1Data' }, { film2: 'film2Data' }];

        fetchMock.getOnce(FILMS_URL, {
            body: { data },
            headers: { 'content-type': 'application/json' }
        });

        const store = mockStore({ data: [] });

        return store.dispatch(getFilms(FILMS_URL)).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: types.REQUEST_FILMS,
                    payload: null
                },
                {
                    type: types.RECEIVE_FILMS,
                    payload: data
                }
            ]);
        });
    });

    it('REQUEST_FILM_BY_ID when fetching film has been done', () => {
        const data = { id: 1, film1: 'film1Data' };
        const urlWithId = FILMS_URL + '/' + 1;

        fetchMock.getOnce(urlWithId, {
            body: data,
            headers: { 'content-type': 'application/json' }
        });

        const store = mockStore({ film: {} });

        return store.dispatch(getFilmById(urlWithId)).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: types.REQUEST_FILM_BY_ID,
                    payload: null
                },
                {
                    type: types.RECEIVE_FILM_BY_ID,
                    payload: data
                }
            ]);
        });
    });

    it('FILM_NOT_FOUND when fetching film has been done with empty object', () => {
        const urlWithId = FILMS_URL + '/' + 1;

        fetchMock.getOnce(urlWithId, {
            body: {},
            headers: { 'content-type': 'application/json' }
        });

        const store = mockStore({ film: {} });

        return store.dispatch(getFilmById(urlWithId)).then(() => {
            expect(store.getActions()).toEqual([
                {
                    type: types.REQUEST_FILM_BY_ID,
                    payload: null
                },
                {
                    type: types.FILM_NOT_FOUND,
                    payload: null
                }
            ]);
        });
    });

    it('REHYDRATE when fetching films has been failed', () => {
        fetchMock.getOnce(FILMS_URL, {
            throws: 'error'
        });

        const store = mockStore({ data: [] });

        return store.dispatch(getFilms(FILMS_URL)).catch(() => {
            expect(store.getActions()).toEqual([
                {
                    type: REHYDRATE,
                    payload: null
                }
            ]);
        });
    });

    it('FILM_NOT_FOUND when fetching film has been failed', () => {
        const urlWithId = FILMS_URL + '/' + 1;

        fetchMock.getOnce(urlWithId, {
            throws: 'error'
        });

        const store = mockStore({ film: {} });

        return store.dispatch(getFilmById(urlWithId)).catch(() => {
            expect(store.getActions()).toEqual([
                {
                    type: types.FILM_NOT_FOUND,
                    payload: null
                }
            ]);
        });
    });
});
