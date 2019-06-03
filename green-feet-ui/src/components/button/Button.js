import React from 'react';
import PropTypes from 'prop-types';

const SizeEnum = {
    SMALL: 'small',
    MEDIUM: '',
    LARGE: 'large',
};

export const Button = ({ children, className, disabled, size, type, ...rest }) => {
    let content = children;
    const sizeClass = size !== SizeEnum.MEDIUM ? `button--${size}` : '';

    if (typeof children === 'string') {
        content = (
            <span>
                {children}
            </span>
        );
    }

    return (
        <button
            {...rest}
            type={type}
            className={`button ${className} ${sizeClass}`}
            disabled={disabled}
        >
            {content}
        </button>
    );
};

Button.SizeEnum = SizeEnum;

Button.defaultProps = {
    size: SizeEnum.MEDIUM,
    className: '',
    disabled: false,
    type: 'button',
};

Button.propTypes = {
    size: PropTypes.oneOf(Object.values(SizeEnum)),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
};
