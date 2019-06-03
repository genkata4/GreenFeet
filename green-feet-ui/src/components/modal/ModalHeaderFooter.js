import React from 'react';
import PropTypes from 'prop-types';

export const ModalHeaderFooter = ({ children, onClose, className }) => {
    if (!children) return null;

    let content = children;

    if (typeof children === 'string') {
        content = <h3>{children}</h3>;
    }

    return (
        <div className={`Modal__header-footer ${className}`}>
            {content}
            {onClose &&
                <span className="Modal__close" onClick={onClose}>
                    &times;
                </span>
            }
        </div>
    );
};

ModalHeaderFooter.defaultProps = {
    children: null,
    onClose: null,
};

ModalHeaderFooter.propTypes = {
    className: PropTypes.string.isRequired,
    onClose: PropTypes.func,
    children: PropTypes.node,
};
