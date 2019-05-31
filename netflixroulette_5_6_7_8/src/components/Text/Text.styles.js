import styled from 'styled-components';

export const StyledText = styled.div`
    color: ${props => props.color};
    cursor: ${props => props.cursor};
    pointer-events: ${props => props.pointerEvents};
`;
