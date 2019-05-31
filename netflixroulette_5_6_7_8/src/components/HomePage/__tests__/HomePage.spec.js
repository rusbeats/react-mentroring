import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../index';

describe('HomePage', () => {
    it('should render correctly (snapshot)', () => {
        const component = shallow(<HomePage />);
        expect(component).toMatchSnapshot();
    });
});
