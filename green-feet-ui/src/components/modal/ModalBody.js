import React from 'react';
import PropTypes from 'prop-types';

export const ModalBody = ({ children, className }) => {
    if (!children) return null;

    let content = children;

    if (typeof children === 'string') {
        content = <p>{children}</p>
    }

    return (
        <div className={`Modal__body ${className}`}>
            {content}
        </div>
    );
};

ModalBody.defaultProps = {
    children: null,
};

ModalBody.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string.isRequired,
};
