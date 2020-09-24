import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
class HeaderComponent extends Component {
  render() {
    return (
      <>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="#">Ristornate con fusion</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row-row-header">
              <div className="coli-12 col-sm-6">
                <h1>
                  <strong>Ristornate con fusion</strong>
                </h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </>
    );
  }
}

export default HeaderComponent;
