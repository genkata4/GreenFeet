import { connect } from 'react-redux';
import { UserEffects, UserSelectors } from '../../store/user';
import { UserPage } from './UserPage';

const mapStateToProps = (state) => ({
    userName: UserSelectors.getUserName(state),
    carbonFootprint: UserSelectors.getCarbonFootprint(state),
    routes: UserSelectors.getRoutes(state),
    error: UserSelectors.getError(state),
    loading: UserSelectors.isLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
    updateUserName(userName) {
        dispatch(UserEffects.updateUserName(userName));
    },
    deleteUser() {
        dispatch(UserEffects.deleteUser());
    },
    fetchRoutes() {
        dispatch(UserEffects.fetchRoutes());
    },
    resetStore() {
        dispatch(UserEffects.resetStore());
    },
    clearError() {
        dispatch(UserEffects.clearError());
    },
});

export const UserPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserPage);
