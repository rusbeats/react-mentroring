import React from 'react';
import { shallow } from 'enzyme';
import Film from '../index';
import { Image } from '../../Image/Image.styles';

describe('Film', () => {
    it('should render correctly (snapshot)', () => {
        const film = {
            poster_path: 'http://some-url.com',
            title: 'Test title',
            release_date: '2000-12-31',
            genres: ['one', 'two', 'three']
        };

        const component = shallow(<Film film={film} />);
        expect(component).toMatchSnapshot();
    });

    it('should have correct src prop', () => {
        const src = 'https://some-url.com';
        const component = shallow(<Image alt="" src={src} />);
        expect(component.props().src).toEqual(src);
    });
});
