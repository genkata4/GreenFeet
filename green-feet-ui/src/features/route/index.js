import { connect } from 'react-redux';
import { RouteSelectors, RouteEffects } from '../../store/route';
import { RoutePage } from './RoutePage';
import { resetStoreHoc } from '../../utils/reset-store-hoc';
import { optionalChainingGet } from '../../utils/functions';

const mapStateToProps = (state) => ({
    routes: RouteSelectors.getRoutes(state),
    startingPosition: optionalChainingGet(RouteSelectors.getStartingPosition(state), 'title'),
    destination: optionalChainingGet(RouteSelectors.getDestination(state), 'title'),
    mode: RouteSelectors.getMode(state),
    error: RouteSelectors.getError(state),
    loading: RouteSelectors.isLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
    clearError() {
        dispatch(RouteEffects.clearError());
    },
    resetStore() {
        dispatch(RouteEffects.resetStore());
    },
    resetLocations() {
        dispatch(RouteEffects.resetLocations());
    },
    selectStartingPosition(startingPosition) {
        dispatch(RouteEffects.selectStartingPosition(startingPosition));
    },
    selectDestination(destination) {
        dispatch(RouteEffects.selectDestination(destination));
    },
    findLocation(locationTitle) {
        return dispatch(RouteEffects.findLocation(locationTitle))
            .then((action) =>
                action.locations.map(location => ({
                    ...location,
                    value: location.title,
                    label: `${location.title}; ${location.vicinity}`,
                }))
            );
    },
    findRoute(type, transportMode) {
        dispatch(RouteEffects.findRoutes(type, transportMode));
    },
    selectRoute(route) {
        dispatch(RouteEffects.selectRoute(route));
    },
});

export const RoutePageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(resetStoreHoc(RoutePage));
