import React, { Fragment } from 'react';
import Header from '../Header';
import Films from '../FilmsList/Films';
import Footer from '../Footer';

//Wrapped in Fradment
//Removed all unnecessary divs
//included Header and Footer
const HomePage = () => {
    return (
        <Fragment>
            <Header />
            <Films />
            <Footer />
        </Fragment>
    );
};

export default HomePage;
