import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from './Spinner';
import { ErrorAlert } from '../alert';

export const ConditionalSpinner = ({ active, error, children, ...rest }) => {
    if (active) {
        return <Spinner {...rest} style={{ marginTop: 50 }} />;
    }

    if (error) {
        return (
            <ErrorAlert permanent style={{ marginTop: 50 }}>
                {error}
            </ErrorAlert>
        );
    }

    return children;
};

ConditionalSpinner.defaultProps = {
    children: null,
    error: null,
};

ConditionalSpinner.propTypes = {
    active: PropTypes.bool.isRequired,
    error: PropTypes.node,
    children: PropTypes.node,
};
