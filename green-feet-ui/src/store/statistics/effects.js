import * as Actions from './actions';
import * as api from '../../utils/api';
import { AppEffects } from '../app';
import { buildErrorMessage } from '../../utils/functions';

export const { clearError, resetStore } = Actions;

export const getStatistics = (userName) =>
    async (dispatch) => {
        dispatch(Actions.getStatisticsRequest());

        try {
            const { data: user } = await api.get(`/users/${userName}`);

            console.log('user', user);
            dispatch(Actions.getStatisticsSuccess(user.userName));
            dispatch(AppEffects.setCurrentUser(user));
        } catch (error) {
            console.error(error);
            dispatch(Actions.getStatisticsFailure(buildErrorMessage(error)));
        }
    };
