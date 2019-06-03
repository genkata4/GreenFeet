import * as Types from './types';

const getInitialState = () => ({
    isLoginSuccessful: false,
    userName: '',
    error: null,
    loading: false,
});

export const loginReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case Types.RESET_LOGIN_STORE:
            return getInitialState();
        case Types.CLEAR_LOGIN_ERROR:
            return {
                ...state,
                error: null,
            };
        case Types.CHANGE_USER_NAME:
            return {
                ...state,
                userName: action.userName,
            };
        case Types.DO_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                isLoginSuccessful: false,
            };
        case Types.DO_LOGIN_SUCCESS:
            return {
                ...state,
                userName: action.userName,
                loading: false,
                isLoginSuccessful: true,
            };
        case Types.DO_LOGIN_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
                isLoginSuccessful: false,
            };
        default:
            return state;
    }
};
