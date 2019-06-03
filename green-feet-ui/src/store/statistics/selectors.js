const getStore = (state) => state.login;

export const getUsers = (state) => getStore(state).users;

export const isLoading = (state) => getStore(state).loading;

export const getError = (state) => getStore(state).error;
