import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { LoginPageContainer } from './features/login';
import { AuthenticatedRoute } from './components/authernticated-route';
import { AuthenticatedApp } from './features/authenticated-app';

export const App = ({ user }) => (
    <Router>
        <Switch>

            <Route path="/login" component={LoginPageContainer} />

            <AuthenticatedRoute
                path="/"
                component={AuthenticatedApp}
                user={user}
            />
            
        </Switch>
    </Router>
);

App.defaultProps = {
    user: null,
};

App.propTypes = {
    user: PropTypes.object,
};
