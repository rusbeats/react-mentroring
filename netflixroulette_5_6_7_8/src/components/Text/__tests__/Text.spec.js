import React from 'react';
import { shallow } from 'enzyme';
import Text from '../index';

const PROPS = {
    color: '#000000',
    cursor: 'pointer',
    pointerEvents: 'none',
    children: 'Text for render',
    onClick: jest.fn()
};

describe('Text', () => {
    it('should render correctly (snapshot)', () => {
        const component = shallow(
            <Text color={PROPS.color} cursor={PROPS.cursor} pointerEvents={PROPS.pointerEvents} onClick={PROPS.onClick}>
                {PROPS.children}
            </Text>
        );
        expect(component).toMatchSnapshot();
    });
});
