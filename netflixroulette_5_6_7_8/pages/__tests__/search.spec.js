import React from 'react';
import { shallow } from 'enzyme';
import { Search } from '../search';

describe('Search', () => {
    it('should render correctly (snapshot)', () => {
        const component = shallow(<Search />);
        expect(component).toMatchSnapshot();
    });
});
