import { connect } from 'react-redux';
import { StatisticsPage } from './StatisticsPage';
// import { resetStoreHoc } from '../../utils/reset-store-hoc';

// const mapStateToProps = (state) => ({
//     error: UserSelectors.getError(state),
//     loading: UserSelectors.isLoading(state),
// });
//
// const mapDispatchToProps = (dispatch) => ({
//     clearError() {
//         dispatch(UserEffects.clearError());
//     },
//     resetStore() {
//         dispatch(UserEffects.resetStore());
//     },
// });

export const StatisticsPageContainer = connect(
    // mapStateToProps,
    // mapDispatchToProps,
)(StatisticsPage);
