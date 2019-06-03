import * as Types from './types';

export const resetStore = () => ({
    type: Types.RESET_LOGIN_STORE,
});

export const clearError = () => ({
    type: Types.CLEAR_LOGIN_ERROR,
});

export const changeUserName = (userName) => ({
    type: Types.CHANGE_USER_NAME,
    userName,
});

export const doLoginRequest = () => ({
    type: Types.DO_LOGIN_REQUEST,
});

export const doLoginSuccess = (userName) => ({
    type: Types.DO_LOGIN_SUCCESS,
    userName,
});

export const doLoginFailure = (error) => ({
    type: Types.DO_LOGIN_FAILURE,
    error,
});
