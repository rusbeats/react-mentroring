import React from 'react';
import { mount } from 'enzyme';
import SearchPanel from '../components/Search/SearchPanel';
import SearchBar from '../components/Search/SearchBar';
import TitleButton from '../components/Search/TitleButton';
import GenreButton from '../components/Search/GenreButton';
import RedSearchButton from '../components/Search/RedSearchButton';


// Homework 4: Enzyme Tests
describe('SearchPanel subcomponents have been loaded', () => {
  it('should show <SearchPanel /> component has four subcomponents:', () => {
    const component = mount(<SearchPanel />);
    expect(component.find(SearchBar).exists()).toBe(true);
    expect(component.find(TitleButton).exists()).toBe(true);
    expect(component.find(GenreButton).exists()).toBe(true);
    expect(component.find(RedSearchButton).exists()).toBe(true);
  });
});
