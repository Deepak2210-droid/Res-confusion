import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./menuComponent";
import { DISHES } from "../shared/dishes";
import { Component } from "react";
import DishDetail from "./Dishdetail";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
    console.log("Constructor Main is called");
  }
  onaDishSelect(DishId) {
    this.setState({ selectedDish: DishId });
  }
  render() {
    console.log("Main render is called");
    return (
      <div>
        <HeaderComponent />
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
        <FooterComponent />
      </div>
    );
  }
}
export default Main;
