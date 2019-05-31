import React from 'react';
import { shallow } from 'enzyme';
import { FilmDetails } from '../index';

const PROPS = {
    match: {
        params: 1
    },
    film: {
        id: 1,
        genres: ['genre1', 'genre2', 'genre3'],
        runtime: 100
    },
    film2: {
        id: 2,
        genres: ['genre4'],
        runtime: 100
    },
    notFound: true
};

describe('FilmDetails', () => {
    it('should render correctly (snapshot)', () => {
        const component = shallow(<FilmDetails match={PROPS.match} filmFromState={PROPS.film} />);
        expect(component).toMatchSnapshot();
    });

    it('should render correctly if no film found (snapshot)', () => {
        const component = shallow(
            <FilmDetails match={PROPS.match} filmFromState={PROPS.film2} notFound={PROPS.notFound} />
        );
        expect(component).toMatchSnapshot();
    });
});
