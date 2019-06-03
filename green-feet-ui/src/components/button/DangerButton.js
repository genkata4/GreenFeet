import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

export const DangerButton = ({ children, className, ...rest }) => (
    <Button {...rest} className={`${className} button--danger`}>
        {children}
    </Button>
);

DangerButton.SizeEnum = Button.SizeEnum;

DangerButton.defaultProps = {
    children: null,
    className: '',
};

DangerButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
