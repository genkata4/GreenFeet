import * as Actions from './actions';
import * as Selectors from './selectors';
import * as api from '../../utils/api';
import { UserEffects } from '../user';

export const { clearError, resetStore, changeUserName } = Actions;

export const doLogin = (withRegistration) =>
    async (dispatch, getState) => {
        dispatch(Actions.doLoginRequest());

        try {
            const userName = Selectors.getUserName(getState());
            let user;

            if (withRegistration) {
                user = await api.post(`/users/${userName}`);
            } else {
                user = await api.get(`/users/name/${Selectors.getUserName(getState())}`);
            }

            user = await user.json();

            if (!user.id || !user.userName) {
                throw new Error('Empty object cannot represent a user');
            }

            dispatch(UserEffects.setCurrentUser(user));
            dispatch(Actions.doLoginSuccess(user.userName));
        } catch (error) {
            console.error(error);
            dispatch(Actions.doLoginFailure(error));
        }
    };
