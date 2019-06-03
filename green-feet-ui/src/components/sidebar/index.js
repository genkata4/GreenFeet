import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => (
    <nav className="Sidebar">
        <ul>
            <NavLink
                to="/"
                className="Sidebar__link"
                activeClassName="Sidebar__link--active"
            >
                <li className="Sidebar__link-home">
                    Home
                </li>
            </NavLink>
            <NavLink
                to="/user"
                className="Sidebar__link"
                activeClassName="Sidebar__link--active"
            >
                <li className="Sidebar__link-tenant">
                    User history
                </li>
            </NavLink>
        </ul>
    </nav>
);
