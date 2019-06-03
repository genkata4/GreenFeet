import React from 'react';

export const TableCell = ({ children, ...rest }) => (
    <td {...rest}>
        {children}
    </td>
);
