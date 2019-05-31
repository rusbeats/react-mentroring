import React from 'react';
import { shallow } from 'enzyme';
import Button from '../index';
import { StyledButton } from '../Button.styles';

const PROPS = {
    size: 'small',
    text: 'Button text'
};

describe('Button', () => {
    it('should render correctly (snapshot)', () => {
        const component = shallow(
            <Button size={PROPS.size} active margin>
                {PROPS.text}
            </Button>
        );
        expect(component).toMatchSnapshot();
    });

    it('should be active and with margin', () => {
        const component = shallow(<StyledButton size={PROPS.size} active margin />);
        expect(component.props()).toEqual(expect.objectContaining({ active: true, margin: true, size: 'small' }));
    });

    it('should be not active and without margin', () => {
        const component = shallow(<StyledButton size={PROPS.size} active={false} margin={false} />);
        expect(component.props()).toEqual(expect.objectContaining({ active: false, margin: false, size: 'small' }));
    });
});
