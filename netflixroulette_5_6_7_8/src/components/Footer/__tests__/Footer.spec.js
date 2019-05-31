import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../index';
import { StyledLink } from '../../Link/Link.styles';
import HomePage from '../../HomePage';

describe('Footer', () => {
    it('should render correctly (snapshot)', () => {
        const component = shallow(<Footer />);
        expect(component).toMatchSnapshot();
    });

    it('should go to Home', () => {
        const component = shallow(<Footer />);
        const homePage = shallow(<HomePage />);
        component.find(StyledLink).simulate('click');
        expect(homePage).toHaveLength(1);
    });
});
