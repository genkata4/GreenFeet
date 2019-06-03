import * as Types from './types';

export const resetStore = () => ({
    type: Types.RESET_ROUTES_STORE,
});

export const resetLocations = (locations) => ({
    type: Types.RESET_LOCATIONS,
    locations,
});

export const clearError = () => ({
    type: Types.CLEAR_ROUTES_ERROR,
});

// export const getRoutesRequest = () => ({
//     type: Types.GET_ROUTES_REQUEST,
// });
//
// export const getRoutesSuccess = (routes) => ({
//     type: Types.GET_ROUTES_SUCCESS,
//     routes,
// });
//
// export const getRoutesFailure = (error) => ({
//     type: Types.GET_ROUTES_FAILURE,
//     error,
// });

export const findLocationRequest = () => ({
    type: Types.FIND_LOCATION_REQUEST,
});

export const findLocationSuccess = (locations) => ({
    type: Types.FIND_LOCATION_SUCCESS,
    locations,
});

export const findLocationFailure = (error) => ({
    type: Types.FIND_LOCATION_FAILURE,
    error,
});

export const selectStartingPosition = (startingPosition) => ({
    type: Types.SELECT_STARTING_POSITION,
    startingPosition,
});

export const selectDestination = (destination) => ({
    type: Types.SELECT_DESTINATION,
    destination,
});

export const selectMode = (mode) => ({
    type: Types.SELECT_MODE,
    mode,
});

export const findRoutesRequest = () => ({
    type: Types.FIND_ROUTES_REQUEST,
});

export const findRoutesSuccess = (routes) => ({
    type: Types.FIND_ROUTES_SUCCESS,
    routes,
});

export const findRoutesFailure = (error) => ({
    type: Types.FIND_ROUTES_FAILURE,
    error,
});

export const selectRouteRequest = () => ({
    type: Types.SELECT_ROUTE_REQUEST,
});

export const selectRouteSuccess = () => ({
    type: Types.SELECT_ROUTE_SUCCESS,
});

export const selectRouteFailure = (error) => ({
    type: Types.SELECT_ROUTE_FAILURE,
    error,
});
