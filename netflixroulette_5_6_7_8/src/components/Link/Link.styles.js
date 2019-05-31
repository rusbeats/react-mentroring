import styled from 'styled-components';

// Implemented link
export const StyledLink = styled.a`
    text-decoration: none;
    color: ${props => props.color};
    cursor: pointer;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;
