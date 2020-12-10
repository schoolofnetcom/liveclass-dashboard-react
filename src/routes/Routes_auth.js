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
                            render={(props) => {
                                if (!isUserAuthenticated()) {
                                    return null;
                                }
                                
                                const loggedUser = getLoggedInUser();
                                if (route.roles && route.roles.indexOf(loggedUser.role) === -1) {
                                    return null;
                                }

                                const AuthComponent = withLayout(props => <route.component {...props} />);
                                return <AuthComponent {...props} />

                            }}
                            component={withLayout(props => <route.component {...props} />)}>

                        </Route>
                    )
                )
            })}
        </Switch>
    </BrowserRouter>
};

export default Routes;