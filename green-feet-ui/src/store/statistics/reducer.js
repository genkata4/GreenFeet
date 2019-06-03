import * as Types from './types';

const getInitialState = () => ({
    users: [],
    error: null,
    loading: false,
});

export const loginReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case Types.RESET_STATISTICS_STORE:
            return getInitialState();
        case Types.CLEAR_STATISTICS_ERROR:
            return {
                ...state,
                error: null,
            };
        case Types.GET_STATISTICS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case Types.GET_STATISTICS_SUCCESS:
            return {
                ...state,
                users: action.users,
                loading: false,
            };
        case Types.GET_STATISTICS_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        default:
            return state;
    }
};
