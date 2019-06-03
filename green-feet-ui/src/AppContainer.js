import { connect } from 'react-redux';
import { App } from './App';
import { UserSelectors } from './store/user';

const mapStateToProps = (state) => ({
    user: UserSelectors.getUser(state),
});

// const mapDispatchToProps = (dispatch) => ({
//     resetStore() {
//         dispatch(AppEffects.resetStore());
//     },
// });

export const AppContainer = connect(
    mapStateToProps,
    null,
)(App);
