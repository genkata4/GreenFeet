import React from 'react';
import PropTypes from 'prop-types';

export const FormFieldInput = ({ input, ...rest }) => {
    if (typeof input === 'string') {
        return (
            <span {...rest}>
                {input}
            </span>
        );
    }

    return input;
};

FormFieldInput.propTypes = {
    input: PropTypes.node.isRequired,
};
