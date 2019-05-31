import React from 'react';
import { shallow } from 'enzyme';
import { Film } from '../film';

describe('Film', () => {
    it('should render correctly (snapshot)', () => {
        const component = shallow(<Film />);
        expect(component).toMatchSnapshot();
    });
});
