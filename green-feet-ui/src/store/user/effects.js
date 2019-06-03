import * as Actions from './actions';
import * as Selectors from './selectors';
import * as api from '../../utils/api';
import { buildErrorMessage } from '../../utils/functions';

export const { resetStore, clearError } = Actions;

export const setCurrentUser = (user) =>
    (dispatch) =>
        dispatch(Actions.updateUserSuccess({
            id: user.id,
            userName: user.userName,
            carbonFootprint: user.carbonFootprint,
        }));

export const updateUserName = (userName) =>
    async (dispatch, getState) => {
        dispatch(Actions.updateUserRequest());

        try {
            const user = Selectors.getUser(getState());
            const data = await api.put(`/users/${user.id}`, {
                ...user,
                userName,
            });
            const updatedUser = await data.json();

            if (updatedUser.status >= 400) {
                throw new Error(updatedUser);
            }

            dispatch(Actions.updateUserSuccess({
                id: updatedUser.id,
                userName: updatedUser.userName,
                carbonFootprint: updatedUser.carbonFootprint,
            }));
        } catch (error) {
            console.error(error);
            dispatch(Actions.updateUserFailure(buildErrorMessage(error)));
        }
    };

export const deleteUser = () =>
    async (dispatch, getState) => {
        dispatch(Actions.updateUserRequest());

        try {
            await api.del(`/users/${Selectors.getUserId(getState())}`);

            dispatch(Actions.updateUserSuccess(null));
        } catch (error) {
            console.error(error);
            dispatch(Actions.updateUserFailure(buildErrorMessage(error)));
        }
    };

export const fetchRoutes = () =>
    async (dispatch, getState) => {
        dispatch(Actions.fetchRoutesRequest());

        try {
            const data = await api.get(`/route/user/${Selectors.getUserId(getState())}`);
            const routes = await data.json();

            console.log('routes', routes);
            dispatch(Actions.fetchRoutesSuccess(routes.map(route => ({
                id: route.id,
                startingPosition: route.startingPoint.title,
                destination: route.destination.title,
                time: route.time,
                distance: route.distance,
                carbonEmissions: route.carbonEmissions,
                type: route.type,
                transportMode: route.transportMode,
            }))));

            if (routes && routes.length) {
                dispatch(Actions.updateUserSuccess(routes[0].user));
            }
        } catch (error) {
            console.error(error);
            dispatch(Actions.fetchRoutesFailure(buildErrorMessage(error)));
        }
    };
