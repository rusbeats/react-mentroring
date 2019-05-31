import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Text from '../src/components/Text';
import Button from '../src/components/Button';
import Film from '../src/components/Film';
import { StyledFilms } from '../src/components/FilmsList/Base.styles';

const TEXT_PROPS = {
    color: '#d15c6e',
    cursor: 'pointer',
    pointerEvents: 'auto'
};

const BUTTON_PROPS = {
    sizes: {
        big: 'big',
        medium: 'medium',
        small: 'small'
    },
    active: true,
    disabled: true,
    margin: true
};

const FILM_PROPS = {
    title: 'Star Trek: Insurrection',
    release_date: '1998-12-10',
    poster_path: 'https://image.tmdb.org/t/p/w500/9pbc44kltJhArUNyrdQcantMEvH.jpg',
    genres: ['Science Fiction', 'Action', 'Adventure', 'Thriller']
};

storiesOf('Text', module)
    .add('with color', () => <Text color={TEXT_PROPS.color}>with color</Text>)
    .add('with cursor', () => <Text cursor={TEXT_PROPS.cursor}>with cursor</Text>)
    .add('with pointerEvents and click', () => (
        <Text onClick={action('clicked')} pointerEvents={TEXT_PROPS.pointerEvents}>
            with pointerEvents
        </Text>
    ));

storiesOf('Button', module)
    .add('with big size and active', () => (
        <Button onClick={action('clicked')} size={BUTTON_PROPS.sizes.big} active={BUTTON_PROPS.active}>
            with big size and active
        </Button>
    ))
    .add('with medium size and not active', () => (
        <Button onClick={action('clicked')} size={BUTTON_PROPS.sizes.medium}>
            with medium size and not active
        </Button>
    ))
    .add('with small size and disabled', () => (
        <Button onClick={action('clicked')} size={BUTTON_PROPS.sizes.small} disabled={BUTTON_PROPS.disabled}>
            with small size and disabled
        </Button>
    ))
    .add('with margin', () => (
        <Fragment>
            <Button onClick={action('clicked')} size={BUTTON_PROPS.sizes.small} margin={BUTTON_PROPS.margin}>
                with margin
            </Button>
            <Button onClick={action('clicked')} size={BUTTON_PROPS.sizes.small}>
                some other button
            </Button>
        </Fragment>
    ));

storiesOf('Film', module).add('with film', () => (
    <StyledFilms>
        <Film onClick={action('clicked')} film={FILM_PROPS} />
    </StyledFilms>
));
