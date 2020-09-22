import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardImgOverlay,
} from "reactstrap";
import renderDish from "./Dishdetail";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
    console.log("Constructor is called");
  }
  componentDidMount() {
    console.log("Menu component is invoked");
  }
  onaDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onaDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    console.log("render invoked");
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div>{renderDish(this.state.selectedDish)}</div>
      </div>
    );
  }
}

export default Menu;
