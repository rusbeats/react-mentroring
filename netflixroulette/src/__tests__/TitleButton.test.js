import React from 'react';
import { shallow } from 'enzyme';
import TitleButton from '../components/Search/TitleButton';

// Homework 4: Enzyme Snapshot testing
it('TitleButton renders correctly', () => {
  const component = shallow(
    <TitleButton />
  );
  expect(component).toMatchSnapshot();
});
