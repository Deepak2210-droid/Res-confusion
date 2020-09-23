import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import Main from "./components/MainComponent";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default Main;
