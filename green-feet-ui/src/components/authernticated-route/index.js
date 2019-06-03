import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export class AuthenticatedRoute extends React.Component {
    authenticatedRender = (props) => {
        const { component: PrivateComponent, user } = this.props;

        if (!user) {
            return <Redirect to="/login" />;
        }

        return <PrivateComponent {...props} />;
    };

    render() {
        const { path } = this.props;

        return <Route path={path} render={this.authenticatedRender} />;
    }
}

AuthenticatedRoute.defaultProps = {
    user: null,
};

AuthenticatedRoute.propTypes = {
    component: PropTypes.func.isRequired,
    user: PropTypes.object,
    path: PropTypes.string.isRequired,
};
