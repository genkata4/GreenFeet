import React from 'react';
import PropTypes from 'prop-types';
import { createInput } from '../hoc';

const SelectorInput = ({ className, options, value, onChange, onFocus, onBlur, ...rest }) => (
    <select
        {...rest}
        className={`Selector ${className}`}
        value={value.value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
    >
        {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ))}
    </select>
);

const createSelectorItem = (valueKey='', labelKey='') => (option={}) => {
    if (typeof option === 'string') {
        return {
            value: option,
            label: option,
        };
    }

    return {
        ...option,
        value: option[valueKey],
        label: option[labelKey],
    };
};

export const createOptions = (options, valueKey, labelKey) =>
    options.map(
        createSelectorItem(valueKey, labelKey),
    );

export const createValue = (option, valueKey, labelKey) =>
    createSelectorItem(valueKey, labelKey)(option);

SelectorInput.defaultProps = {
    className: '',
    value: '',
    options: [],
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
};

SelectorInput.propTypes = {
    className: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
    options: PropTypes.array,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
};

export const Selector = createInput(SelectorInput);
