import React from 'react';
import { shallow } from 'enzyme';
import { Films } from '../Films';
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
    sortBy: 'rating',
    filmsCount: 3,
    isFetching: true,
    getFilm: jest.fn()
};

describe('Films', () => {
    it('should render correctly when sorted by rating (snapshot)', () => {
        const component = shallow(<Films films={INITIAL_STATE} sortBy={PROPS.sortBy} filmsCount={PROPS.filmsCount} />);
        expect(component).toMatchSnapshot();
    });

    it('should render correctly when sorted by releaseDate (snapshot)', () => {
        PROPS.sortBy = 'releaseDate';
        const component = shallow(<Films films={INITIAL_STATE} sortBy={PROPS.sortBy} filmsCount={PROPS.filmsCount} />);
        expect(component).toMatchSnapshot();
    });

    it('should render correctly when no results (snapshot)', () => {
        PROPS.filmsCount = 0;
        const component = shallow(<Films filmsCount={PROPS.filmsCount} />);
        expect(component).toMatchSnapshot();
    });

    it('should render loader (snapshot)', () => {
        const component = shallow(<Films isFetching={PROPS.isFetching} />);
        expect(component).toMatchSnapshot();
    });

    it('should handle getFilm', () => {
        const component = shallow(<Films films={INITIAL_STATE} sortBy={PROPS.sortBy} getFilm={PROPS.getFilm} />);
        component
            .find(Film)
            .at(1)
            .simulate('click');
        expect(PROPS.getFilm).toHaveBeenCalled();
    });
});
