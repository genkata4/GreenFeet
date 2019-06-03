import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => (
    <ul className="Sidebar">
        <NavLink
            to="/"
            className="Sidebar__link"
            activeClassName="Sidebar__link--active"
        >

            <li className="Sidebar__link-home" />

            <span>Home</span>

        </NavLink>
        <NavLink
            to="/route"
            className="Sidebar__link"
            activeClassName="Sidebar__link--active"
        >

            <li className="Sidebar__link-route" />

            <span>Route</span>

        </NavLink>
        <NavLink
            to="/user"
            className="Sidebar__link"
            activeClassName="Sidebar__link--active"
        >

            <li className="Sidebar__link--user" />

            <span>User</span>

        </NavLink>
        <NavLink
            to="/statistics"
            className="Sidebar__link"
            activeClassName="Sidebar__link--active"
        >

            <li className="Sidebar__link--statistics" />

            <span>Statistics</span>

        </NavLink>
    </ul>
);
