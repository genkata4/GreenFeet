import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SidebarLink = ({ label, path, state }) => (
    <NavLink to={{ pathname: path, state: state }} activeClassName="Sidebar__nav__link--selected">
        {label}
    </NavLink>
);

SidebarLink.defaultProps = {
    state: {},
};
SidebarLink.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    state: PropTypes.object,
};

export { SidebarLink };
