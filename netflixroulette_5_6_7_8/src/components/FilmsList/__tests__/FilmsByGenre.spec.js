import React from 'react';
import { shallow } from 'enzyme';
import { FilmsByGenre } from '../FilmsByGenre';
import Film from '../../Film';

const INITIAL_STATE = [
    {
        id: 1,
        title: 'Test title 1',
        release_date: '2000-01-31',
        poster_path: 'https://some-image-1.jpg',
        genres: ['Genre 1']
    },
    {
        id: 2,
        title: 'Test title 2',
        release_date: '2001-03-31',
        poster_path: 'https://some-image-2.jpg',
        genres: ['Genre 1', 'Genre 2']
    },
    {
        id: 3,
        title: 'Untitled Avengers',
        release_date: '2002-05-31',
        poster_path: 'https://some-image-3.jpg',
        genres: ['Genre 1', 'Genre 2', 'Genre 3']
    }
];

const PROPS = {
    film: {
        id: 1,
        genres: ['genre1', 'genre2', 'genre3'],
        runtime: 100
    },
    isFetching: true,
    notFound: true,
    getFilm: jest.fn()
};

describe('FilmsByGenre', () => {
    it('should render correctly (snapshot)', () => {
        const component = shallow(<FilmsByGenre films={INITIAL_STATE} filmFromState={PROPS.film} />);
        expect(component).toMatchSnapshot();
    });

    it('should render loader (snapshot)', () => {
        const component = shallow(<FilmsByGenre isFetching={PROPS.isFetching} filmFromState={PROPS.film} />);
        expect(component).toMatchSnapshot();
    });

    it('should not render', () => {
        const component = shallow(<FilmsByGenre notFound={PROPS.notFound} filmFromState={PROPS.film} />);
        expect(component.type()).toBeNull();
    });

    it('should handle getFilm', () => {
        const component = shallow(
            <FilmsByGenre films={INITIAL_STATE} filmFromState={PROPS.film} getFilm={PROPS.getFilm} />
        );
        component
            .find(Film)
            .at(1)
            .simulate('click');
        expect(PROPS.getFilm).toHaveBeenCalled();
    });
});
