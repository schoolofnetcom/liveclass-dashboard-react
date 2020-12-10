import React, { Component, Suspense } from 'react';
import { Container } from 'reactstrap';

const Topbar = React.lazy(() => import('../components/Topbar'));
const Footer = React.lazy(() => import('../components/Footer'));

const emptyLoading = () => <div></div>;
const loading = () => <div className="text-center"></div>;

class VerticalLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const children = this.props.children || null;

        return (
            <div className="app">
                <div id="wrapper">
                    <Suspense fallback={emptyLoading()}>
                        <Topbar {...this.props} />
                    </Suspense>
                    <Suspense fallback={emptyLoading()}>
                        <div id="sidebar-menu" className="left-side-menu">
                        </div>
                    </Suspense>

                    <div className="content-page">
                        <div className="content">
                            <Container fluid>
                                <Suspense fallback={loading()}>{children}</Suspense>
                            </Container>
                        </div>

                        <Suspense fallback={emptyLoading()}>
                            <Footer {...this.props} />
                        </Suspense>
                    </div>
                </div>
            </div>
        );
    }
}

export default VerticalLayout;
