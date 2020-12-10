import React, { Suspense } from "react";

const loading = () => <div className=""></div>;

const AuthLayout = (props) => {
    const children = props.children || null;
    return (
        <Suspense fallback={loading()}>
            {children}
        </Suspense>
    );
}

export default AuthLayout;