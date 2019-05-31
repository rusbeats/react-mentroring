import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

const Button = ({ size, active, margin, children, disabled, onClick }) => {
    return (
        <StyledButton size={size} active={active} margin={margin} disabled={disabled} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

StyledButton.displayName = 'Button';

Button.propTypes = {
    size: PropTypes.string,
    active: PropTypes.bool,
    margin: PropTypes.bool,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};

export default Button;
