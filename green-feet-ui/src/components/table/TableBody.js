import React from 'react';

export const TableBody = ({ children, ...rest }) => (
    <tbody {...rest}>
        {children}
    </tbody>
);
