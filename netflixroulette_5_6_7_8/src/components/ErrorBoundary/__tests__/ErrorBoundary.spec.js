import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from '../index';
import { StyledApp } from '../../App/App.styles';

describe('ErrorBoundary', () => {
    const children = shallow(<StyledApp />);
    const component = shallow(<ErrorBoundary t={key => key} children={children} />);
    component.setState({ hasError: true });

    it('should render error', () => {
        expect(component.find('h1')).toHaveLength(1);
    });

    it('should have correct text', () => {
        expect(component.text()).toEqual('generalError');
    });

    it('should not render error', () => {
        component.setState({ hasError: false });
        expect(component.find('h1')).toHaveLength(0);
    });

    it('should return error object', () => {
        expect(ErrorBoundary.getDerivedStateFromError()).toEqual({ hasError: true });
    });

    it('should log error', () => {
        jest.spyOn(global.console, 'log');
        component.instance().componentDidCatch('error occurred');
        expect(global.console.log).toHaveBeenCalledWith('error occurred');
    });
});
