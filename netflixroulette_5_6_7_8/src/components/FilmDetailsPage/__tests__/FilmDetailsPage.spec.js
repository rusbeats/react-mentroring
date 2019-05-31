import React from 'react';
import { shallow } from 'enzyme';
import { FilmDetailsPage } from '../index';

const PROPS = {
    match: {
        params: {
            id: 1
        }
    }
};

describe('FilmDetailsPage', () => {
    it('should render correctly (snapshot)', () => {
        const component = shallow(<FilmDetailsPage match={PROPS.match} />);
        expect(component).toMatchSnapshot();
    });
});
