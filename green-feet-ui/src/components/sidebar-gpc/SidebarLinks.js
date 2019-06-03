import React from 'react';
import PropTypes from 'prop-types';

const SidebarLinks = ({ label, children, navClassName }) => (
    <nav className={`Sidebar__nav ${navClassName || ''}`}>
        <ul> {label}
            {children.map((child, index) => (
                <li key={index}>
                    {child}
                </li>
            ))}
        </ul>
    </nav>
);

SidebarLinks.defaultProps = {
    label: '',
    children: [],
    navClassName: null,
};
SidebarLinks.propTypes = {
    label: PropTypes.string,
    children: PropTypes.any,
    navClassName: PropTypes.string,
};

export { SidebarLinks };
