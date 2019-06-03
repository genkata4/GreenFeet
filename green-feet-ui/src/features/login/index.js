import { connect } from 'react-redux';
import { LoginEffects, LoginSelectors } from '../../store/login';
import { LoginPage } from './LoginPage';
import { resetStoreHoc } from '../../utils/reset-store-hoc';

const mapStateToProps = (state) => ({
    isLoginSuccessful: LoginSelectors.isLoginSuccessful(state),
    userName: LoginSelectors.getUserName(state),
    error: LoginSelectors.getError(state),
    loading: LoginSelectors.isLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
    onUserNameChange(event) {
        dispatch(LoginEffects.changeUserName(event.target.value));
    },
    doLogin(e) {
        e.preventDefault();
        dispatch(LoginEffects.doLogin(false));
    },
    doRegister(e) {
        e.preventDefault();
        dispatch(LoginEffects.doLogin(true));
    },
    clearError() {
        dispatch(LoginEffects.clearError());
    },
    resetStore() {
        dispatch(LoginEffects.resetStore());
    },
});

export const LoginPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(resetStoreHoc(LoginPage));
