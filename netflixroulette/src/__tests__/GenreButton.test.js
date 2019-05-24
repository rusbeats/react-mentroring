import React from 'react';
import { shallow } from 'enzyme';
import GenreButton from '../components/Search/GenreButton';

// Homework 4: Enzyme Snapshot testing
it('GenreButton renders correctly', () => {
  const component = shallow(
    <GenreButton />
  );
  expect(component).toMatchSnapshot();
});
