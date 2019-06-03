import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

export const PrimaryButton = ({ children, className='', ...rest }) => (
    <Button {...rest} className={`${className} button--primary`}>
        {children}
    </Button>
);

PrimaryButton.SizeEnum = Button.SizeEnum;

PrimaryButton.defaultProps = {
    children: null,
    className: '',
};

PrimaryButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
