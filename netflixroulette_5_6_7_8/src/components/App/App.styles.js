import constants from '../../utils/constants';
import styled from 'styled-components';

const { colors, fonts } = constants;
//Homework 8: Made all subcomponents styled-components
// Implemented Grid for the entire app for better rendering
export const StyledApp = styled.div`
    display: grid;
    grid-row-gap: 40px;
    background-color: ${colors.lighterGrey};
    font-family: ${fonts.calibri};
`;
