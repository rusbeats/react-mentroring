import React from 'react';
import fetch from 'isomorphic-fetch';
import { connect } from 'react-redux';
import { getUrlWithGenreFilter, getUrlWithId, isEmptyObject } from '../src/utils/helpers';
import { filmNotFound, receiveFilmById, receiveFilms } from '../src/store/actions';
import FilmDetailsPage from '../src/components/FilmDetailsPage';

export const Film = () => <FilmDetailsPage />;
//Homework 7
Film.getInitialProps = async ({ store, query }) => {
    try {
        const { id } = query;
        const { dispatch } = store;

        const fetchFilmUrl = getUrlWithId(id);
        const filmRes = await fetch(fetchFilmUrl);
        const filmData = await filmRes.json();

        if (isEmptyObject(filmData)) {
            dispatch(filmNotFound());
        } else {
            const genre = filmData.genres[0];
            const urlWithFilter = getUrlWithGenreFilter(genre);

            const filmsRes = await fetch(urlWithFilter);
            const { data } = await filmsRes.json();

            dispatch(receiveFilmById(filmData));
            dispatch(receiveFilms(data));
        }
    } catch (e) {
        console.error(e);
    }
};

export default connect(state => state)(Film);
