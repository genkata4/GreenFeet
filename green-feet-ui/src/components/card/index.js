import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ children, className, ...rest }) => (
    <div {...rest} className={`card ${className}`}>
        {children}
    </div>
);

Card.defaultProps = {
    className: '',
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
