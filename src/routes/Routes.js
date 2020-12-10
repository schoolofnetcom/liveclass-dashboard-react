import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import withLayout from './../components/Layout';

import { allFlattenRoutes } from './index';
import { isUserAuthenticated, getLoggedInUser } from '../helpers/authUtils';

const Routes = () => {
    return <BrowserRouter>
        <Switch>
            {allFlattenRoutes.map((route, index) => {
                return (
                    !route.children && (
                        <Route
                            key={index}
                            path={route.path}
                            roles={route.roles}
                            exact={route.exact}
                            component={withLayout(props => <route.component {...props} />)}>
                        </Route>
                    )
                )
            })}
        </Switch>
    </BrowserRouter>
};

export default Routes;