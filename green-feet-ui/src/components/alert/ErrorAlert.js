import React from 'react';
import { Alert } from './Alert';

export const ErrorAlert = (props) => (
    <Alert {...props} type={Alert.type.ERROR} />
);
