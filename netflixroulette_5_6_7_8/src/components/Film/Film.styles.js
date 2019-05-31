import constants from '../../utils/constants';
import styled from 'styled-components';

const { colors } = constants;

export const FilmTitleAndDateWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`;

export const FilmTitle = styled.div`
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    max-width: 250px;
`;

export const FilmDate = styled.div`
    border-style: solid;
    border-width: 1.5px;
    border-color: ${colors.grey};
    border-radius: 3px;
    padding: 3px 10px;
`;

export const FilmGenres = styled.div`
    color: ${colors.grey};
    max-width: 350px;
`;
