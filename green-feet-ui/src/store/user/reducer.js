import * as Types from './types';

const getInitialState = () => ({
    user: null,
    error: null,
    loading: false,
});

export const userReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case Types.RESET_USER_STORE:
            return getInitialState();
        case Types.CLEAR_USER_ERROR:
            return {
                ...state,
                error: null,
            };
        case Types.UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case Types.UPDATE_USER_SUCCESS:
            return {
                ...state,
                user: action.user,
                loading: false,
            };
        case Types.UPDATE_USER_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case Types.FETCH_ROUTES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case Types.FETCH_ROUTES_SUCCESS:
            return {
                ...state,
                routes: action.routes,
                loading: false,
            };
        case Types.FETCH_ROUTES_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        default:
            return state;
    }
};
