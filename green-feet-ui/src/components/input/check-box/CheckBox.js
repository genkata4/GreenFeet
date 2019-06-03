import React from 'react';
import PropTypes from 'prop-types';
import { createInput } from '../hoc';

export const CheckBoxInput = ({ value, name, children, readOnly, className, ...rest }) => (
    <div className={`Checkbox ${className}`}>
        <input
            {...rest}
            type="checkbox"
            name={name}
            value={name}
            checked={Boolean(value)}
            disabled={readOnly}
            readOnly={readOnly}
        />
        <span>
            {children}
        </span>
    </div>
);

CheckBoxInput.defaultProps = {
    className: '',
    readOnly: false,
};

CheckBoxInput.propTypes = {
    value: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    readOnly: PropTypes.bool,
    className: PropTypes.string,
};

export const CheckBox = createInput(CheckBoxInput);
