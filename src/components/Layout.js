import React, { Component, Suspense } from 'react';

import { isUserAuthenticated } from '../helpers/authUtils';

const loading = () => <div></div>;
const AuthLayout = React.lazy(() => import('../layouts/Auth'));
const VerticalLayout = React.lazy(() => import('../layouts/Vertical'));

const withLayout = (WrappedComponent) => {
    return (props) => {
        const getLayout = () => !isUserAuthenticated() ? AuthLayout : VerticalLayout;     
        const Layout = getLayout();
        return (
            <Suspense fallback={loading()}>
                <Layout {...props}>
                    <WrappedComponent {...props} />
                </Layout>
            </Suspense>
        );
    };
};

export default withLayout;
