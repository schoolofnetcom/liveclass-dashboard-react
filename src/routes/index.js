import React from 'react';
import { Redirect } from 'react-router-dom';

import { flattenRoutes } from './utils';

const Login = React.lazy(() => import('./../pages/auth/Login'));
const Dashboard = React.lazy(() => import('./../pages/dashboard'));

const rootRoute = {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboard" />
};

const dashboardRoutes = {
    path: '/dashboard',
    name: 'Dashboard',
    icon: '',
    component: Dashboard,
    roles: ['Admin']
};

const authRoutes = {
    path: '/account',
    name: 'Auth',
    children: [
        {
            path: '/account/login',
            name: 'Login',
            component: Login
        }
    ]
};

const authProtectedRoutes = [dashboardRoutes];
const allRoutes = [rootRoute, dashboardRoutes, authRoutes];
const allFlattenRoutes = flattenRoutes(allRoutes);

export { allRoutes, authProtectedRoutes, allFlattenRoutes };