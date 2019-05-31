import React, { Fragment } from 'react';
import FilmDetails from '../FilmDetails';
import FilmsByGenre from '../FilmsList/FilmsByGenre';
import Footer from '../Footer';

export const FilmDetailsPage = () => {
    return (
        <Fragment>
            <FilmDetails />
            <FilmsByGenre />
            <Footer />
        </Fragment>
    );
};

export default FilmDetailsPage;
