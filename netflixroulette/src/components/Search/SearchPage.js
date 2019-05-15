import React from 'react';
import SearchPanel from './SearchPanel';
import EmptyResult from '../Result/EmptyResult';

const SearchPage = () => (
    <div className="search-page">
                <SearchPanel/>
                <EmptyResult/>
    </div>
);
export default SearchPage;
