import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Layout } from '../../components/layout';
import { HomePage } from '../home';
import { UserPageContainer } from '../user';
import { RoutePageContainer } from '../route';
import { StatisticsPageContainer } from '../statistics';

export const AuthenticatedApp = () => (
    <Layout>
        <Switch>

            <Route path="/route" component={RoutePageContainer} />

            <Route path="/user" component={UserPageContainer} />

            <Route path="/statistics" component={StatisticsPageContainer} />

            <Route path="/" component={HomePage} />

        </Switch>
    </Layout>
);
