import {
    REQUEST_FILMS,
    RECEIVE_FILMS,
    TOGGLE_SORTING,
    TOGGLE_SEARCH_BY,
    REQUEST_FILM_BY_ID,
    RECEIVE_FILM_BY_ID,
    GET_FILM_FROM_STATE,
    FILM_NOT_FOUND
} from './actions';

const createAction = (type, payload = null) => ({
    type,
    payload
});

export const requestFilms = () => createAction(REQUEST_FILMS);
export const requestFilmById = () => createAction(REQUEST_FILM_BY_ID);
export const receiveFilms = data => createAction(RECEIVE_FILMS, data);
export const receiveFilmById = data => createAction(RECEIVE_FILM_BY_ID, data);
export const toggleSorting = sortBy => createAction(TOGGLE_SORTING, sortBy);
export const toggleSearchBy = searchBy => createAction(TOGGLE_SEARCH_BY, searchBy);
export const getFilmFromState = film => createAction(GET_FILM_FROM_STATE, film);
export const filmNotFound = () => createAction(FILM_NOT_FOUND);
