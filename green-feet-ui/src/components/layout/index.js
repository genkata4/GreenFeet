import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '..';
import { Sidebar } from '../sidebar-kyc';

export const Layout = ({ children, ...rest }) => (
    <div {...rest} className="Layout">

        <div className="Layout__body">
            <Sidebar />

            <div className="Layout__body__content">
                {children}
            </div>
        </div>

        <Header/>
    </div>
);

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
    ]).isRequired,
};
