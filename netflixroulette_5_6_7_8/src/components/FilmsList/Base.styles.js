import styled from 'styled-components';

export const StyledFilms = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 33%);
    grid-template-rows: auto;
    grid-row-gap: 30px;
    grid-column-gap: 20px;
    justify-items: center;
`;

export const StyledLoader = styled.div`
    text-align: center;
`;
