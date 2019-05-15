import React from 'react';
import FilmPage from './Film/FilmPage';
import SearchPage from './Search/SearchPage';
import ErrorBoundary from './ErrorBoundary';
import style from "../sass/style.scss";
// Main App component
const App = () => (
    <ErrorBoundary>
        <SearchPage/>
        <FilmPage/>
    </ErrorBoundary>      
);
export default App;
