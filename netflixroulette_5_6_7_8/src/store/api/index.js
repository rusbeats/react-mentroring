import { requestFilms, receiveFilms, requestFilmById, receiveFilmById, filmNotFound } from '../actions/index';
import { isEmptyObject } from '../../utils/helpers';

export const getFilms = url => {
    return dispatch => {
        dispatch(requestFilms());
        return fetch(url)
            .then(response => response.json())
            .then(response => dispatch(receiveFilms(response.data)))
            .catch(() => dispatch(filmNotFound()));
    };
};

export const getFilmById = url => {
    return dispatch => {
        dispatch(requestFilmById());
        return fetch(url)
            .then(response => response.json())
            .then(response =>
                isEmptyObject(response) ? dispatch(filmNotFound()) : dispatch(receiveFilmById(response))
            )
            .catch(() => dispatch(filmNotFound()));
    };
};
