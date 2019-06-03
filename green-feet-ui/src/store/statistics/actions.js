import * as Types from './types';

export const resetStore = () => ({
    type: Types.RESET_STATISTICS_STORE,
});

export const clearError = () => ({
    type: Types.CLEAR_STATISTICS_ERROR,
});

export const getStatisticsRequest = () => ({
    type: Types.GET_STATISTICS_REQUEST,
});

export const getStatisticsSuccess = (users) => ({
    type: Types.GET_STATISTICS_SUCCESS,
    users,
});

export const getStatisticsFailure = (error) => ({
    type: Types.GET_STATISTICS_FAILURE,
    error,
});
