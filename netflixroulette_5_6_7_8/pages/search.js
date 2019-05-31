import React from 'react';
import fetch from 'isomorphic-fetch';
import { connect } from 'react-redux';
import { receiveFilms } from '../src/store/actions';
import HomePage from '../src/components/HomePage';
import { getSearchUrl } from '../src/utils/helpers';

export const Search = () => <HomePage />;

Search.getInitialProps = async ({ store, query }) => {
    try {
        const { search } = query;
        const { getState, dispatch } = store;
        const searchBy = getState().searchBy;
        const fetchFilmsUrl = getSearchUrl(search, searchBy);

        const res = await fetch(fetchFilmsUrl);
        const { data } = await res.json();

        dispatch(receiveFilms(data));
    } catch (e) {
        console.error(e);
    }
};

export default connect(state => state)(Search);
