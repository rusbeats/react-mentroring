import React from 'react';
import fetch from 'isomorphic-fetch';
import { connect } from 'react-redux';
import { FILMS_URL } from '../src/store/api/api';
import { receiveFilms } from '../src/store/actions';
import HomePage from '../src/components/HomePage';

export const Index = () => <HomePage />;

Index.getInitialProps = async ({ store }) => {
    try {
        const { dispatch } = store;
        const res = await fetch(FILMS_URL);
        const { data } = await res.json();
        dispatch(receiveFilms(data));
    } catch (e) {
        console.error(e);
    }
};

export default connect(state => state)(Index);
