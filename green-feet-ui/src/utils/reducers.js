import { combineReducers } from 'redux';

import { loginReducer } from '../store/login/reducer';
import { userReducer } from '../store/user/reducer';
import { routeReducer } from '../store/route/reducer';

export const rootReducer = (state, action) => combineReducers({
    login: loginReducer,
    user: userReducer,
    route: routeReducer,
})(state, action);
