import React from 'react';
import { shallow } from 'enzyme';
import { Index } from '../index';

describe('Index', () => {
    it('should render correctly (snapshot)', () => {
        const component = shallow(<Index />);
        expect(component).toMatchSnapshot();
    });
});
