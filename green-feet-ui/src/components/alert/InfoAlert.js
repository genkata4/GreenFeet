import React from 'react';
import { Alert } from './Alert';

export const InfoAlert = (props) => (
    <Alert {...props} type={Alert.type.INFO} />
);
