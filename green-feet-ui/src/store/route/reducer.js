import * as Types from './types';

const getInitialState = () => ({
    locations: [],
    routes: [],
    startingPosition: null,
    destination: null,
    error: null,
    loading: false,
});

export const routeReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case Types.RESET_ROUTES_STORE:
            return getInitialState();
        case Types.RESET_LOCATIONS:
            return {
                ...state,
                locations: [],
            };
        case Types.CLEAR_ROUTES_ERROR:
            return {
                ...state,
                error: null,
            };
        case Types.FIND_LOCATION_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case Types.FIND_LOCATION_SUCCESS:
            return {
                ...state,
                locations: action.locations,
                loading: false,
            };
        case Types.FIND_LOCATION_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case Types.FIND_ROUTES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case Types.FIND_ROUTES_SUCCESS:
            return {
                ...state,
                routes: action.routes,
                loading: false,
            };
        case Types.FIND_ROUTES_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case Types.SELECT_ROUTE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case Types.SELECT_ROUTE_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case Types.SELECT_ROUTE_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case Types.SELECT_STARTING_POSITION:
            return {
                ...state,
                startingPosition: action.startingPosition,
            };
        case Types.SELECT_DESTINATION:
            return {
                ...state,
                destination: action.destination,
            };
        case Types.SELECT_MODE:
            return {
                ...state,
                mode: action.mode,
            };
        default:
            return state;
    }
};
