import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../components/Search/SearchBar';

// Homework 4: Enzyme Tests
describe('SearchBar component', () => {
  it('should render a class search-bar', () => {
    const component = shallow(<SearchBar />);
    expect(component.find('.search-bar').hasClass('search-bar')).toEqual(true);
  });
});
