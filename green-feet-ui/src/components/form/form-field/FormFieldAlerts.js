import React from 'react';
import PropTypes from 'prop-types';
import { ErrorAlert, WarningAlert, InfoAlert } from '../../alert';

export const FormFieldAlerts = ({ error, warning, info }) => (
    <>
        <ErrorAlert>
            {error}
        </ErrorAlert>

        <WarningAlert>
            {warning}
        </WarningAlert>

        <InfoAlert>
            {info}
        </InfoAlert>
    </>
);

FormFieldAlerts.defaultProps = {
    error: null,
    warning: null,
    info: null,
};

FormFieldAlerts.propTypes = {
    error: PropTypes.node,
    warning: PropTypes.node,
    info: PropTypes.node,
};
