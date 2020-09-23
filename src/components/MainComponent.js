import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./menuComponent";
import { DISHES } from "../shared/dishes";
import { Component } from "react";
import DishDetail from "./Dishdetail";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }
  onaDishSelect(DishId) {
    this.setState({ selectedDish: DishId });
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristronate con fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu
          dishes={this.state.dishes}
          onClick={(DishId) => this.onaDishSelect(DishId)}
        />
        <div className="container">
          <DishDetail
            dish={
              this.state.dishes.filter(
                (dish) => dish.id === this.state.selectedDish
              )[0]
            }
          />
        </div>
      </div>
    );
  }
}

export default Main;
