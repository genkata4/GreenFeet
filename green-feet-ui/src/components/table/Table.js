import React from 'react';

export const Table = ({ children, ...rest }) => (
    <table {...rest}>
        {children}
    </table>
);
