import React from 'react';

export const TableFoot = ({ children, ...rest }) => (
    <tfoot {...rest}>
        {children}
    </tfoot>
);
