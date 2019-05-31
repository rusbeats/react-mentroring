import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Text from '../Text';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toggleSorting, toggleSearchBy } from '../../store/actions';
import { getFilms } from '../../store/api';
import { getSearchUrl } from '../../utils/helpers';
import Link from 'next/link';
import { getHeaderState } from '../../selectors';
import {
    MainHeader,
    HeaderText,
    SearchHeader,
    SearchInput,
    ButtonsWrapper,
    SearchByButtons,
    SearchByText,
    SubHeader,
    Sorting
} from './Header.styles';

export const Header = ({ filmsCount, sortBy, searchBy, toggleSorting, toggleSearchBy, fetchFilms }) => {
    const { t } = useTranslation();
    const sortedByRating = sortBy === 'rating';
    const sortedByReleaseDate = sortBy === 'releaseDate';
    const searchByTitle = searchBy === 'title';
    const searchByGenre = searchBy === 'genre';
    const [searchValue, setSearchValue] = useState('');
    const searchUrl = getSearchUrl(searchValue, searchBy);
    const handleSearchInput = useCallback(e => setSearchValue(e.target.value), [setSearchValue]);
    const handleSearchBy = useCallback(searchBy => () => toggleSearchBy(searchBy), [toggleSearchBy, searchBy]);
    const handleSortBy = useCallback(sortBy => () => toggleSorting(sortBy), [toggleSorting, sortBy]);
    const handleEnter = useCallback(
        e => {
            if (e.key === 'Enter') {
                fetchFilms(searchUrl);
            }
        },
        [fetchFilms, searchUrl]
    );

    return (
        <header>
            <MainHeader>
                <HeaderText>{t('netflixRoulette')}</HeaderText>
                <SearchHeader>{t('header.searchText')}</SearchHeader>
                <SearchInput onInput={handleSearchInput} onKeyPress={handleEnter} />
                <ButtonsWrapper>
                    <SearchByButtons>
                        <SearchByText>{t('header.searchBy')}</SearchByText>
                        <Button
                            size={'small'}
                            onClick={handleSearchBy('title')}
                            active={searchByTitle}
                            margin
                            disabled={searchByTitle}
                        >
                            {t('header.title')}
                        </Button>
                        <Button
                            size={'medium'}
                            onClick={handleSearchBy('genre')}
                            active={searchByGenre}
                            disabled={searchByGenre}
                        >
                            {t('header.genre')}
                        </Button>
                    </SearchByButtons>
                    <Link href={`/search?search=${searchValue}&searchBy=${searchBy}`} as={`/search/${searchValue}`}>
                        <Button size={'big'} active disabled={searchValue === ''}>
                            {t('search')}
                        </Button>
                    </Link>
                </ButtonsWrapper>
            </MainHeader>
            <SubHeader>
                <Text>
                    {filmsCount} {t('header.found')}
                </Text>
                <Sorting>
                    <Text>{t('header.sortBy')}</Text>
                    <Text
                        onClick={handleSortBy('releaseDate')}
                        cursor={sortedByRating ? 'pointer' : ''}
                        color={sortedByReleaseDate ? '#d15c6e' : ''}
                        pointerEvents={sortedByReleaseDate ? 'none' : ''}
                    >
                        {t('header.releaseDate')}
                    </Text>
                    <Text
                        onClick={handleSortBy('rating')}
                        cursor={sortedByReleaseDate ? 'pointer' : ''}
                        color={sortedByRating ? '#d15c6e' : ''}
                        pointerEvents={sortedByRating ? 'none' : ''}
                    >
                        {t('header.rating')}
                    </Text>
                </Sorting>
            </SubHeader>
        </header>
    );
};

Header.propTypes = {
    filmsCount: PropTypes.number,
    sortBy: PropTypes.string,
    searchBy: PropTypes.string,
    toggleSorting: PropTypes.func,
    toggleSearchBy: PropTypes.func,
    fetchFilms: PropTypes.func
};

const mapStateToProps = state => getHeaderState(state);

const mapDispatchToProps = dispatch => ({
    toggleSorting: sortBy => dispatch(toggleSorting(sortBy)),
    toggleSearchBy: searchBy => dispatch(toggleSearchBy(searchBy)),
    fetchFilms: url => dispatch(getFilms(url))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
