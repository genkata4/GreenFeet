import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

export const SecondaryButton = ({ children, className, ...rest }) => (
    <Button {...rest} className={`${className} button--secondary`}>
        {children}
    </Button>
);

SecondaryButton.SizeEnum = Button.SizeEnum;

SecondaryButton.defaultProps = {
    children: null,
    className: '',
};

SecondaryButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
