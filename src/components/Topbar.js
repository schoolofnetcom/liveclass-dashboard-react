import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

class Topbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="navbar navbar-expand flex-column flex-md-row navbar-custom">
          <Container fluid>
            <Link to="/" className="navbar-brand mr-0 mr-md-2 logo">
              <span className="logo-lg">
                <img src="" alt="" />
              </span>
            </Link>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Topbar;
