import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../index';
import { SearchInput } from '../Header.styles';
import Button from '../../Button';
import Text from '../../Text';

const PROPS = {
    sortBy: 'releaseDate',
    toggleSearchBy: jest.fn(),
    toggleSorting: jest.fn(),
    fetchFilms: jest.fn(),
    filmsCount: 0
};

describe('Header', () => {
    it('should render correctly (snapshot)', () => {
        const component = shallow(<Header />);
        expect(component).toMatchSnapshot();
    });

    it('should have buttons', () => {
        const component = shallow(<Header />);
        expect(component.find(Button)).toHaveLength(3);
    });

    it('should have texts', () => {
        const component = shallow(<Header />);
        expect(component.find(Text)).toHaveLength(4);
    });

    it('should have correct text props for sortBy releaseDate', () => {
        const component = shallow(<Header sortBy={PROPS.sortBy} />);
        const componentProps = component
            .find(Text)
            .at(2)
            .props();
        expect(componentProps).toEqual(
            expect.objectContaining({
                color: '#d15c6e',
                cursor: '',
                pointerEvents: 'none',
                children: 'header.releaseDate'
            })
        );
    });

    it('should have correct text props for sortBy rating', () => {
        PROPS.sortBy = 'rating';
        const component = shallow(<Header sortBy={PROPS.sortBy} />);
        const componentProps = component
            .find(Text)
            .at(2)
            .props();
        expect(componentProps).toEqual(
            expect.objectContaining({ color: '', cursor: 'pointer', pointerEvents: '', children: 'header.releaseDate' })
        );
    });

    it('should call toggleSearchBy with title', () => {
        const component = shallow(<Header toggleSearchBy={PROPS.toggleSearchBy} />);
        component
            .find(Button)
            .at(0)
            .simulate('click');
        expect(PROPS.toggleSearchBy).toHaveBeenCalledWith('title');
    });

    it('should call toggleSearchBy with genre', () => {
        const component = shallow(<Header toggleSearchBy={PROPS.toggleSearchBy} />);
        component
            .find(Button)
            .at(1)
            .simulate('click');
        expect(PROPS.toggleSearchBy).toHaveBeenCalledWith('genre');
    });

    it('should call fetchFilms on press Enter key', () => {
        const component = shallow(<Header fetchFilms={PROPS.fetchFilms} />);
        component.find(SearchInput).simulate('keyPress', { key: 'Enter' });
        expect(PROPS.fetchFilms).toHaveBeenCalled();
    });

    it('should not execute on not enter key', () => {
        const component = shallow(<Header fetchFilms={PROPS.fetchFilms} />);
        component.find(SearchInput).simulate('keyPress', { key: 'Space' });
        expect(PROPS.fetchFilms).toHaveReturned();
    });

    it('should call toggleSorting with releaseDate', () => {
        const component = shallow(<Header toggleSorting={PROPS.toggleSorting} />);
        component
            .find(Text)
            .at(2)
            .simulate('click');
        expect(PROPS.toggleSorting).toHaveBeenCalledWith('releaseDate');
    });

    it('should call toggleSorting with rating', () => {
        const component = shallow(<Header toggleSorting={PROPS.toggleSorting} />);
        component
            .find(Text)
            .at(3)
            .simulate('click');
        expect(PROPS.toggleSorting).toHaveBeenCalledWith('rating');
    });
});
