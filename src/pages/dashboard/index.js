import React, { Component } from 'react';
import { Row, Col, } from 'reactstrap';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="">
                    <Row className="page-title align-items-center">
                        <Col sm={4} xl={6}>
                            <h4 className="mb-1 mt-0">Dashboard</h4>
                        </Col>
                        <Col sm={8} xl={6}>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}


export default Dashboard;