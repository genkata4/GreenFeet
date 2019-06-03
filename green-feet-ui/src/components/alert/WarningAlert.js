import React from 'react';
import { Alert } from './Alert';

export const WarningAlert = (props) => (
    <Alert {...props} type={Alert.type.WARNING} />
);
