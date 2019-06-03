import React from 'react';
import PropTypes from 'prop-types';
import { createInput } from '..';

const TextAreaInput = ({ value, className, onChange, onFocus, onBlur, ...rest }) => (
    <textarea
        {...rest}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`text-area ${className}`}
    />
);

TextAreaInput.defaultProps = {
    className: '',
    value: '',
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
};

TextAreaInput.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
};

export const TextArea = createInput(TextAreaInput);
