import React from 'react';
import { mount } from 'enzyme';
import SearchPage from '../components/Search/SearchPage';
import SearchPanel from '../components/Search/SearchPanel';
import EmptyResult from '../components/Result/EmptyResult';


// Homework 4: Enzyme Tests
describe('SearchPage subcomponents have been loaded', () => {
  it('should show <SearchPanel /> component', () => {
    const component = mount(<SearchPage />);
    expect(component.find(SearchPanel).exists()).toBe(true);
  });
});

// Homework 4: Enzyme Tests
describe('SearchPage subcomponents have been loaded', () => {
  it('should show <EmptyResult /> component', () => {
    const component = mount(<SearchPage />);
    expect(component.find(EmptyResult).exists()).toBe(true);
  });
});
