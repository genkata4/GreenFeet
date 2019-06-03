const getStore = (state) => state.login;

export const getUserName = (state) => getStore(state).userName;

export const isLoginSuccessful = (state) => getStore(state).isLoginSuccessful;

export const isLoading = (state) => getStore(state).loading;

export const getError = (state) => getStore(state).error;
