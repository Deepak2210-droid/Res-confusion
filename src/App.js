import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/menuComponent";
import { DISHES } from "./shared/dishes";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristronate con fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
