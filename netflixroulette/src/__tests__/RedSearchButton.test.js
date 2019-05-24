import React from 'react';
import { shallow } from 'enzyme';
import RedSearchButton from '../components/Search/RedSearchButton';

// Homework 4: Enzyme Snapshot testing
it('TitleButton renders correctly', () => {
  const component = shallow(
    <RedSearchButton />
  );
  expect(component).toMatchSnapshot();
});
