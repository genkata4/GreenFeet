import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {
    Card,
    Form,
    FormField,
    TextField,
    PrimaryButton,
    ErrorAlert,
    Spinner,
} from '../../components';
import greenFeetLogo from '../../green-feet-white.png';

export const LoginPage = ({ isLoginSuccessful, userName, error, loading, onUserNameChange, doLogin, doRegister, clearError }) => {
    if (isLoginSuccessful) {
        return <Redirect to="/" />;
    }

    return (
        <div className="LoginPage">

            <img src={greenFeetLogo} alt="Green Feet" className="LoginPage__logo" />

            <h1 className="LoginPage__heading">
                <strong>Welcome to Green Feet</strong>
            </h1>

            <Card className="LoginPage__card">

                <Form>

                    <FormField
                        input={(
                            <TextField
                                value={userName}
                                placeholder="User name goes here..."
                                onChange={onUserNameChange}
                            />
                        )}
                        required={!('readOnly' || 'Boolean(tenant)')}
                        className="LoginPage__card-element"
                    />

                    {!loading && [
                        <PrimaryButton
                            key="Login"
                            onClick={doLogin}
                            type="submit"
                            className="LoginPage__card-element"
                        >
                            Login
                        </PrimaryButton>,

                        <PrimaryButton
                            key="Register"
                            onClick={doRegister}
                            type="submit"
                            className="LoginPage__card-element"
                        >
                            Register
                        </PrimaryButton>,
                    ]}

                    {loading && <Spinner/>}

                    {!loading && error &&
                    <ErrorAlert onClose={clearError}>
                        {error.message}
                    </ErrorAlert>
                    }

                    <p className="LoginPage__card-element">
                        Please login with your user name or register with new one.
                    </p>

                </Form>

            </Card>

        </div>
    );
};

LoginPage.defaultProps = {
    userName: '',
    error: null,
};

LoginPage.propTypes = {
    isLoginSuccessful: PropTypes.bool.isRequired,
    userName: PropTypes.string,
    error: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    onUserNameChange: PropTypes.func.isRequired,
    doLogin: PropTypes.func.isRequired,
    doRegister: PropTypes.func.isRequired,
    clearError: PropTypes.func.isRequired,
};
