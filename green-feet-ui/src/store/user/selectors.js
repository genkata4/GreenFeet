const getStore = (state) => state.user;

export const getUser = (state) => getStore(state).user;

export const getRoutes = (state) => getStore(state).routes;

export const getUserId = (state) => getUser(state).id;

export const getUserName = (state) => getUser(state).userName;

export const getCarbonFootprint = (state) => getUser(state).carbonFootprint;

export const isLoading = (state) => getStore(state).loading;

export const getError = (state) => getStore(state).error;
