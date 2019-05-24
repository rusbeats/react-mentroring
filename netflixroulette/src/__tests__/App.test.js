import React from 'react';
import { mount } from 'enzyme';
import App from '../components/App';
import FilmPage from '../components/Film/FilmPage';

// Homework 4: Enzyme Tests
describe('App subcomponents have been loaded', () => {
  it('should show <Container /> component', () => {
    const component = mount(<App />);
    expect(component.find(FilmPage).exists()).toBe(true);
  });
});
