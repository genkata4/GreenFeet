import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldAlerts, FormFieldInput, FormFieldLabel } from '.';

export const FormField = ({ label, children, className, input, required, error, warning, info, ...rest }) => (
    <div {...rest} className={`FormField ${className}`}>
        <FormFieldLabel required={required}>
            {label}
        </FormFieldLabel>

        <FormFieldInput input={input} />

        <FormFieldAlerts
            error={error}
            warning={warning}
            info={info}
        />

        {children}
    </div>
);

FormField.defaultProps = {
    label: '',
    className: '',
    children: null,
    input: null,
    required: false,
    error: null,
    warning: null,
    info: null,
};

FormField.propTypes = {
    label: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node,
    input: PropTypes.node,
    required: PropTypes.bool,
    error: PropTypes.node,
    warning: PropTypes.node,
    info: PropTypes.node,
};
