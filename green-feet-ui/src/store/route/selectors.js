const getStore = (state) => state.route;

export const getRoutes = (state) => getStore(state).routes;

export const getLocations = (state) => getStore(state).locations;

export const isLoading = (state) => getStore(state).loading;

export const getError = (state) => getStore(state).error;

export const getStartingPosition = (state) => getStore(state).startingPosition;

export const getDestination = (state) => getStore(state).destination;

export const getMode = (state) => getStore(state).mode;
