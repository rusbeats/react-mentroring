import React from 'react';
import { mount } from 'enzyme';
import ItemTitle from '../components/Item/ItemTitle';

// Homework 4: Enzyme Tests
describe('ItemTitle component', () => {
  it('should render a class item-title', () => {
    const component = mount(<ItemTitle />);
    expect(component.find('.item-title').hasClass('item-title')).toEqual(true);
  });
});
