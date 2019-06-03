import * as Actions from './actions';
import * as api from '../../utils/api';
import { RouteSelectors } from '.';
import { UserSelectors } from '../user';
import { buildErrorMessage } from '../../utils/functions';

export const { clearError, resetStore, resetLocations, selectDestination, selectStartingPosition } = Actions;

// export const setRoutes = (routes) =>
//     (dispatch) =>
//         dispatch(Actions.getRoutesSuccess(deepCopy(routes)));
export const findLocation = (locationTitle) =>
    async (dispatch) => {
        if (locationTitle.length >= 5) {
            dispatch(Actions.findLocationRequest());

            try {
                const data = await api.get(`/location/${locationTitle}`);
                const locations = await data.json();

                console.log('locations', locations);
                return dispatch(Actions.findLocationSuccess(locations));
            } catch (error) {
                console.error(error);
                return dispatch(Actions.findLocationFailure(buildErrorMessage(error)));
            }
        }
    };

export const selectMode = (type, transportMode) =>
    (dispatch) => {
        dispatch(Actions.selectMode(`${type};${transportMode}`));
    };

export const findRoutes = (type, transportMode) =>
    async (dispatch, getState) => {
        dispatch(Actions.findRoutesRequest());

        try {
            const state = getState();
            const startingPosition = RouteSelectors.getStartingPosition(state);
            const destination = RouteSelectors.getDestination(state);
            const data = await api.get(`/route/${startingPosition.position.join(',')}/${destination.position.join(',')}/${type}/${transportMode}`);
            const routes = await data.json();

            console.log('route', routes);
            dispatch(Actions.findRoutesSuccess(routes.map(route => ({
                ...route,
                startingPosition: startingPosition.title,
                destination: destination.title,
            }))));
        } catch (error) {
            console.error(error);
            dispatch(Actions.findRoutesFailure(buildErrorMessage(error)));
        }
    };

export const selectRoute = (route) =>
    async (dispatch, getState) => {
        dispatch(Actions.selectRouteRequest());

        try {
            const state = getState();
            const userId = UserSelectors.getUserId(state);
            await api.post(`/route/user/${userId}`, {
                ...route,
                startingPoint: RouteSelectors.getStartingPosition(state),
                destination: RouteSelectors.getDestination(state),
            });

            dispatch(Actions.selectRouteSuccess());
            dispatch(Actions.resetStore());
        } catch (error) {
            console.error(error);
            dispatch(Actions.selectRouteFailure(buildErrorMessage(error)));
        }
    };
