import constants from '../../utils/constants';
import styled from 'styled-components';

const { colors, getPaddingBySize } = constants;

export const StyledButton = styled.button.attrs(({ size, active, margin, disabled }) => ({
    padding: getPaddingBySize(size),
    backgroundColor: active ? colors.lightPink : colors.grey,
    margin: margin ? '20px' : '0',
    disabled
}))`
    color: ${colors.white};
    background-color: ${props => props.backgroundColor};
    border: none;
    padding: ${props => props.padding};
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    margin-right: ${props => props.margin};
    border-radius: 3px;
`;
