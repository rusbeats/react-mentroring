import React from 'react';
import { mount } from 'enzyme';
import FilmPage from '../components/Film/FilmPage';

// Homework 4: Enzyme Tests
describe('ItemTitle component', () => {
  it('should render a class film-page', () => {
    const component = mount(<FilmPage />);
    expect(component.find('.film-page').hasClass('film-page')).toEqual(true);
  });
});
