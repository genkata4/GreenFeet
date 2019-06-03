import * as Types from './types';

export const resetStore = () => ({
    type: Types.RESET_USER_STORE,
});

export const clearError = () => ({
    type: Types.CLEAR_USER_ERROR,
});

export const updateUserRequest = () => ({
    type: Types.UPDATE_USER_REQUEST,
});

export const updateUserSuccess = (user) => ({
    type: Types.UPDATE_USER_SUCCESS,
    user,
});

export const updateUserFailure = (error) => ({
    type: Types.UPDATE_USER_FAILURE,
    error,
});

export const fetchRoutesRequest = () => ({
    type: Types.FETCH_ROUTES_REQUEST,
});

export const fetchRoutesSuccess = (routes) => ({
    type: Types.FETCH_ROUTES_SUCCESS,
    routes,
});

export const fetchRoutesFailure = (error) => ({
    type: Types.FETCH_ROUTES_FAILURE,
    error,
});
