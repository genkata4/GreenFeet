import React from 'react';
import PropTypes from 'prop-types';
import { createInput } from '../hoc';

const TextFieldInput = ({ className, value, readOnly, onChange, onFocus, onBlur, ...rest }) => (
    <input
        {...rest}
        disabled={readOnly}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        type="text"
        className={`text-field ${className}`}
    />
);

TextFieldInput.defaultProps = {
    className: '',
    value: '',
    readOnly: false,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
};

TextFieldInput.propTypes = {
    className: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    readOnly: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
};

export const TextField = createInput(TextFieldInput);
