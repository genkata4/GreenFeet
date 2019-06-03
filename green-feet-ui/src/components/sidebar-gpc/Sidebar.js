import React from 'react';
import PropTypes from 'prop-types';

export const Sidebar = ({ className, children }) => (
    <div className={`Sidebar ${className || ''}`}>
        {children}
    </div>
);

Sidebar.defaultProps = {
    className: null,
};

Sidebar.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
};
