import React from 'react';
import PropTypes from 'prop-types';

export const Form = ({ onSubmit, children, ...rest }) => (
    <form {...rest} onSubmit={onSubmit}>
        {children}
    </form>
);

Form.defaultProps = {
    onSubmit: () => {},
    children: null,
};

Form.propTypes = {
    onSubmit: PropTypes.func,
    children: PropTypes.node,
};
