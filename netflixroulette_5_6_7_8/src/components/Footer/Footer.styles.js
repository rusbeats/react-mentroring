import constants from '../../utils/constants';
import styled from 'styled-components';

const { colors } = constants;

export const StyledFooter = styled.footer`
    padding: 20px 0 20px 75px;
    background-color: ${colors.lightBlack};
    color: ${colors.lightPink};
    font-weight: bold;
`;
