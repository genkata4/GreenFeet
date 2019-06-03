import React from 'react';

export const TableRow = ({ children, ...rest }) => (
    <tr {...rest}>
        {children}
    </tr>
);
