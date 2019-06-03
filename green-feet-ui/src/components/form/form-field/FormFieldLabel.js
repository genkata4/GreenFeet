import React from 'react';
import PropTypes from 'prop-types';

export const FormFieldLabel = ({ children, required, ...rest }) => {
    if (!children) return null;

    return (
        <label {...rest}>
            {children}:
            {required &&
            <span>*</span>
            }
        </label>
    );
};

FormFieldLabel.propTypes = {
    children: PropTypes.node.isRequired,
    required: PropTypes.bool,
};
