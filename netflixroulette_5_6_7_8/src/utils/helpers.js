import { FILMS_URL } from '../store/api/api';

export const isEmptyObject = object => Object.keys(object).length === 0;
export const getYear = date => new Date(date).getFullYear();
export const getSearchUrl = (value, searchBy) => FILMS_URL + '?search=' + value + '&searchBy=' + searchBy;
export const getUrlWithId = id => FILMS_URL + '/' + id;
export const getUrlWithGenreFilter = genre => FILMS_URL + '?filter=' + genre;
