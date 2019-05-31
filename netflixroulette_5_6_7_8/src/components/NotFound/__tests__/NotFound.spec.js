import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../index';

describe('NotFound', () => {
    it('should render correctly (snapshot)', () => {
        const component = shallow(<NotFound />);
        expect(component).toMatchSnapshot();
    });
});
