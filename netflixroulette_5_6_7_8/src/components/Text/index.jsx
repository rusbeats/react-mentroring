import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './Text.styles';

const Text = ({ color, cursor, pointerEvents, children, onClick }) => {
    return (
        <StyledText onClick={onClick} color={color} cursor={cursor} pointerEvents={pointerEvents}>
            {children}
        </StyledText>
    );
};

StyledText.displayName = 'Text';

Text.propTypes = {
    color: PropTypes.string,
    cursor: PropTypes.string,
    pointerEvents: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func
};

export default Text;
