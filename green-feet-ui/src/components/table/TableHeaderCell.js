import React from 'react';

export const TableHeaderCell = ({ children, ...rest }) => (
    <th {...rest}>
        {children}
    </th>
);
