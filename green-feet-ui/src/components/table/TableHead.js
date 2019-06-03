import React from 'react';

export const TableHead = ({ children, ...rest }) => (
    <thead {...rest}>
        {children}
    </thead>
);
